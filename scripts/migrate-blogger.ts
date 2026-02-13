/**
 * Blogger → Astro/Keystatic Migration Script
 *
 * Parses the Blogger Atom feed export and converts posts to MDX
 * with YAML frontmatter compatible with the Keystatic schema.
 *
 * Features:
 * - HTML → Markdown conversion via Turndown + GFM plugin
 * - Image download & localization
 * - Redirect map generation for old Blogger URLs
 * - Slug collision handling
 * - Inline style stripping
 * - Double-encoded entity decoding
 */

import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import * as fs from "node:fs";
import * as path from "node:path";
import * as https from "node:https";
import * as http from "node:http";

// ── Config ────────────────────────────────────────────────────
const FEED_PATH = path.resolve(
  process.env.FEED_PATH ??
    `${process.env.HOME}/Downloads/Takeout/Blogger/Blogs/Python Insider/feed.atom`
);
const OUTPUT_DIR = path.resolve(process.cwd(), "content/posts");
const REDIRECTS_PATH = path.resolve(process.cwd(), "src/data/redirects.json");

// ── Types ─────────────────────────────────────────────────────
interface BloggerEntry {
  id: string;
  "blogger:type": string;
  "blogger:status": string;
  title: string | number;
  content: string | { "#text": string; "@_type": string };
  published: string;
  updated: string;
  "blogger:created": string;
  "blogger:filename": string;
  "blogger:trashed"?: string;
  author: { name: string; uri?: string };
  category:
    | { "@_term"?: string; "@_scheme"?: string }
    | Array<{ "@_term"?: string; "@_scheme"?: string }>
    | string
    | null;
}

interface MigratedPost {
  slug: string;
  title: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  tags: string[];
  description: string;
  legacyUrl: string;
  content: string;
}

// ── Turndown Setup ────────────────────────────────────────────
function createTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
    strongDelimiter: "**",
  });

  td.use(gfm);

  // Remove style attributes before conversion
  td.addRule("stripStyles", {
    filter: (node) => {
      if (node.nodeType === 1) {
        (node as HTMLElement).removeAttribute("style");
        (node as HTMLElement).removeAttribute("class");
        (node as HTMLElement).removeAttribute("face");
      }
      return false;
    },
    replacement: (_content) => "",
  });

  // Handle <code> inside <pre> properly
  td.addRule("codeBlock", {
    filter: (node) => {
      return (
        node.nodeName === "PRE" &&
        node.firstChild !== null &&
        node.firstChild.nodeName === "CODE"
      );
    },
    replacement: (_content, node) => {
      const code = (node as HTMLElement).querySelector("code");
      const text = code ? code.textContent || "" : "";
      return `\n\n\`\`\`\n${text}\n\`\`\`\n\n`;
    },
  });

  return td;
}

// ── HTML Cleaning ─────────────────────────────────────────────
function cleanHtml(html: string): string {
  let cleaned = html;

  // Decode double-encoded entities
  cleaned = cleaned.replace(/&amp;(nbsp|lt|gt|amp|quot|#\d+);/g, "&$1;");
  cleaned = cleaned.replace(/&amp;(#x[0-9a-fA-F]+);/g, "&$1;");

  // Remove inline style attributes
  cleaned = cleaned.replace(/\s+style="[^"]*"/gi, "");
  cleaned = cleaned.replace(/\s+style='[^']*'/gi, "");

  // Remove class attributes
  cleaned = cleaned.replace(/\s+class="[^"]*"/gi, "");

  // Remove face attributes
  cleaned = cleaned.replace(/\s+face="[^"]*"/gi, "");

  // Remove empty <span> wrappers
  cleaned = cleaned.replace(/<span\s*>(.*?)<\/span>/gi, "$1");

  // Remove Blogger <div class="cooked"> wrappers
  cleaned = cleaned.replace(/<div[^>]*class="cooked"[^>]*>/gi, "");

  // Collapse empty divs
  cleaned = cleaned.replace(/<div\s*>\s*<br\s*\/?>\s*<\/div>/gi, "\n");
  cleaned = cleaned.replace(/<div\s*>\s*<\/div>/gi, "");

  // Clean up Blogger-specific wrapper divs (but keep content)
  cleaned = cleaned.replace(/<div\s*>/gi, "\n");
  cleaned = cleaned.replace(/<\/div>/gi, "\n");

  // Normalize &nbsp; to spaces
  cleaned = cleaned.replace(/&nbsp;/gi, " ");

  // Fix common Blogger artifacts
  cleaned = cleaned.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, "\n\n");

  return cleaned;
}

// ── Image Downloading ─────────────────────────────────────────
async function downloadImage(
  url: string,
  destDir: string,
  index: number
): Promise<string | null> {
  try {
    // Determine extension from URL
    const urlPath = new URL(url).pathname;
    let ext = path.extname(urlPath).toLowerCase().split("?")[0];
    if (!ext || ![".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"].includes(ext)) {
      ext = ".png"; // Default
    }

    const filename = `image-${index}${ext}`;
    const destPath = path.join(destDir, filename);

    // Skip if already downloaded
    if (fs.existsSync(destPath)) {
      return filename;
    }

    const data = await fetchUrl(url);
    if (data) {
      fs.writeFileSync(destPath, data);
      return filename;
    }
    return null;
  } catch {
    return null;
  }
}

function fetchUrl(url: string): Promise<Buffer | null> {
  return new Promise((resolve) => {
    const client = url.startsWith("https") ? https : http;
    const request = client.get(url, { timeout: 10000 }, (res) => {
      // Follow redirects
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchUrl(res.headers.location));
        return;
      }

      if (res.statusCode !== 200) {
        resolve(null);
        return;
      }

      const chunks: Buffer[] = [];
      res.on("data", (chunk: Buffer) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", () => resolve(null));
    });

    request.on("error", () => resolve(null));
    request.on("timeout", () => {
      request.destroy();
      resolve(null);
    });
  });
}

async function localizeImages(
  html: string,
  slug: string,
  postDir: string
): Promise<{ html: string; imageCount: number }> {
  // Match img src in HTML
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  let imageCount = 0;
  let result = html;
  const replacements: Array<{ original: string; replacement: string }> = [];

  while ((match = imgRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const srcUrl = match[1];

    // Skip data URIs and relative paths
    if (srcUrl.startsWith("data:") || !srcUrl.startsWith("http")) {
      continue;
    }

    imageCount++;
    const filename = await downloadImage(srcUrl, postDir, imageCount);
    if (filename) {
      // Extract alt text
      const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
      const alt = altMatch ? altMatch[1] : "";
      replacements.push({
        original: fullTag,
        replacement: `<img src="./${filename}" alt="${alt}" />`,
      });
    }
  }

  for (const { original, replacement } of replacements) {
    result = result.replace(original, replacement);
  }

  return { html: result, imageCount };
}

// ── Slug Generation ───────────────────────────────────────────
function generateSlug(filename: string): string {
  // Input: /2022/03/python-3104-and-3912-are-now-available.html
  // Output: python-3104-and-3912-are-now-available

  let slug = filename
    .replace(/^\/\d{4}\/\d{2}\//, "") // Strip date path prefix
    .replace(/\.html$/, "")           // Strip .html extension
    .replace(/_\d+$/, "");            // Strip Blogger collision suffixes like _6

  // Normalize the slug
  slug = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");

  return slug;
}

// ── Tag Extraction ────────────────────────────────────────────
function extractTags(
  category:
    | { "@_term"?: string; "@_scheme"?: string }
    | Array<{ "@_term"?: string; "@_scheme"?: string }>
    | string
    | null
    | undefined
): string[] {
  if (!category) return [];

  const categories = Array.isArray(category) ? category : [category];
  const tags: string[] = [];

  for (const cat of categories) {
    if (typeof cat === "object" && cat["@_term"] != null) {
      const term = String(cat["@_term"]).trim();
      if (term) {
        tags.push(term);
      }
    }
  }

  return tags;
}

// ── Description Generation ────────────────────────────────────
function generateDescription(markdown: string): string {
  // Strip markdown formatting for the description
  const plain = markdown
    .replace(/#{1,6}\s+/g, "")       // headers
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1")     // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/`[^`]+`/g, "")          // code
    .replace(/```[\s\S]*?```/g, "")   // code blocks
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "") // images
    .replace(/\n+/g, " ")             // newlines
    .trim();

  if (plain.length <= 160) return plain;
  return plain.substring(0, 157) + "...";
}

// ── YAML Escaping ─────────────────────────────────────────────
function yamlEscape(str: string): string {
  // If string contains special chars, is numeric, or starts with special chars, wrap in single quotes
  if (
    /[:#\[\]{}&*!|>'"%@`?,\n]/.test(str) ||
    str.startsWith("-") ||
    str.startsWith(" ") ||
    /^\d+(\.\d+)?$/.test(str) ||
    str === "true" ||
    str === "false" ||
    str === "null"
  ) {
    return `'${str.replace(/'/g, "''")}'`;
  }
  return str;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toISOString().split("T")[0]; // YYYY-MM-DD
}

// ── Main Migration ────────────────────────────────────────────
async function migrate() {
  console.log("🐍 Python Insider Blog Migration");
  console.log("=".repeat(50));

  // Read and parse the Atom feed
  console.log(`\nReading feed from: ${FEED_PATH}`);
  const feedXml = fs.readFileSync(FEED_PATH, "utf-8");

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    textNodeName: "#text",
    isArray: (name) => name === "entry" || name === "category",
  });

  const parsed = parser.parse(feedXml);
  const entries: BloggerEntry[] = parsed.feed.entry || [];

  console.log(`Total entries in feed: ${entries.length}`);

  // Filter for live posts
  const livePosts = entries.filter(
    (e) => e["blogger:type"] === "POST" && e["blogger:status"] === "LIVE"
  );

  console.log(`Live posts to migrate: ${livePosts.length}`);

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Track slugs for collision handling
  const slugCounts = new Map<string, number>();
  const redirects: Record<string, string> = {};
  const turndown = createTurndown();

  let migrated = 0;
  let errors = 0;
  let totalImages = 0;
  const authors = new Set<string>();

  for (const entry of livePosts) {
    try {
      // Extract fields
      const title =
        typeof entry.title === "number" ? String(entry.title) : entry.title || "Untitled";
      const author = entry.author?.name || "Unknown";
      const publishDate = entry.published;
      const updatedDate = entry.updated;
      const legacyFilename = entry["blogger:filename"] || "";
      const tags = extractTags(entry.category);

      authors.add(author);

      // Get content
      let htmlContent = "";
      if (typeof entry.content === "string") {
        htmlContent = entry.content;
      } else if (entry.content && typeof entry.content === "object" && "#text" in entry.content) {
        htmlContent = entry.content["#text"];
      }

      // Generate slug with collision handling
      let slug = generateSlug(legacyFilename);
      if (!slug) {
        slug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      }

      const count = slugCounts.get(slug) || 0;
      slugCounts.set(slug, count + 1);
      if (count > 0) {
        slug = `${slug}-${count + 1}`;
      }

      // Create post directory
      const postDir = path.join(OUTPUT_DIR, slug);
      fs.mkdirSync(postDir, { recursive: true });

      // Clean HTML
      let cleaned = cleanHtml(htmlContent);

      // Download and localize images
      const { html: imageProcessedHtml, imageCount } = await localizeImages(
        cleaned,
        slug,
        postDir
      );
      cleaned = imageProcessedHtml;
      totalImages += imageCount;

      // Convert to Markdown
      let markdown = turndown.turndown(cleaned);

      // Post-process markdown
      // Remove excessive blank lines
      markdown = markdown.replace(/\n{3,}/g, "\n\n");
      // Trim
      markdown = markdown.trim();

      // Generate description
      const description = generateDescription(markdown);

      // Build frontmatter
      const frontmatter = [
        "---",
        `title: ${yamlEscape(title)}`,
        `publishDate: '${formatDate(publishDate)}'`,
        `updatedDate: '${formatDate(updatedDate)}'`,
        `author: ${yamlEscape(author)}`,
        `description: ${yamlEscape(description)}`,
        ...(tags.length > 0
          ? [`tags:`, ...tags.map((t) => `  - ${yamlEscape(t)}`)]
          : [`tags: []`]),
        `published: true`,
        `legacyUrl: ${yamlEscape(legacyFilename)}`,
        "---",
      ].join("\n");

      // Write MDX file
      const mdxContent = `${frontmatter}\n\n${markdown}\n`;
      fs.writeFileSync(path.join(postDir, "index.md"), mdxContent, "utf-8");

      // Track redirect: legacy path → new path
      if (legacyFilename) {
        redirects[legacyFilename] = `/blog/${slug}`;
      }

      migrated++;

      if (migrated % 50 === 0) {
        console.log(`  ...migrated ${migrated}/${livePosts.length}`);
      }
    } catch (err) {
      errors++;
      const title =
        typeof entry.title === "number" ? String(entry.title) : entry.title;
      console.error(`  ✗ Error migrating "${title}":`, err);
    }
  }

  // Write redirects JSON
  const redirectsDir = path.dirname(REDIRECTS_PATH);
  fs.mkdirSync(redirectsDir, { recursive: true });
  fs.writeFileSync(REDIRECTS_PATH, JSON.stringify(redirects, null, 2), "utf-8");

  // Summary
  console.log("\n" + "=".repeat(50));
  console.log("Migration Complete!");
  console.log(`  ✓ Posts migrated: ${migrated}`);
  console.log(`  ✗ Errors: ${errors}`);
  console.log(`  🖼 Images downloaded: ${totalImages}`);
  console.log(`  👤 Unique authors: ${authors.size}`);
  console.log(`  🏷 Redirects generated: ${Object.keys(redirects).length}`);
  console.log(`\nAuthors: ${[...authors].sort().join(", ")}`);
  console.log(`\nOutput: ${OUTPUT_DIR}`);
  console.log(`Redirects: ${REDIRECTS_PATH}`);
}

migrate().catch(console.error);
