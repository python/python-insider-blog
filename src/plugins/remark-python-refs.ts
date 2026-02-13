/**
 * remark-python-refs
 *
 * A remark plugin that detects Python ecosystem URLs in Markdown links
 * and transforms them into styled inline badges.
 *
 * Detected patterns:
 *   - PEP links  (by URL pattern OR link text matching "PEP NNN")
 *   - CPython docs (docs.python.org/...)
 *   - PyPI links (pypi.org/project/NAME/)
 *   - GitHub repos (github.com/OWNER/REPO — exactly 2 path segments)
 *   - GitHub users/orgs (github.com/NAME — exactly 1 segment, not reserved)
 */
import type { Root, Link, Paragraph, PhrasingContent } from "mdast";
import { visit } from "unist-util-visit";
import {
  pythonIcon,
  docsIcon,
  githubIcon,
  packageIcon,
  externalIcon,
} from "../components/references/_icons.js";

// ── URL matchers ────────────────────────────────────────

const PEP_OLD = /^https?:\/\/(?:www\.)?python\.org\/dev\/peps\/pep-(\d+)\/?/i;
const PEP_NEW = /^https?:\/\/peps\.python\.org\/pep-(\d+)\/?/i;
const DOCS = /^https?:\/\/docs\.python\.org\//i;
const PYPI = /^https?:\/\/pypi\.org\/project\/([^/]+)\/?/i;
const GITHUB =
  /^https?:\/\/github\.com\/([\w.-]+)(?:\/([\w.-]+))?\/?$/i;

/** GitHub top-level paths that are NOT user/org profiles */
const GH_RESERVED = new Set([
  "about",
  "collections",
  "contact",
  "customer-stories",
  "enterprise",
  "events",
  "explore",
  "features",
  "issues",
  "login",
  "marketplace",
  "new",
  "nonprofit",
  "notifications",
  "open-source",
  "organizations",
  "orgs",
  "pricing",
  "pulls",
  "readme",
  "search",
  "security",
  "settings",
  "site",
  "sponsors",
  "team",
  "topics",
  "trending",
]);

// ── Helpers ─────────────────────────────────────────────

type RefType = "pep" | "docs" | "pypi" | "gh-repo" | "gh-user";

interface Match {
  type: RefType;
  icon: string;
  label: string; // author's original link text — preserved
  url: string;
}

function extractText(children: PhrasingContent[]): string {
  return children
    .map((c) => {
      if (c.type === "text") return c.value;
      if ("children" in c) return extractText(c.children as PhrasingContent[]);
      return "";
    })
    .join("");
}

/** Match by link text — catches "PEP 649", "PEP 649," etc. */
const PEP_TEXT = /^PEP\s+\d+$/i;

function classify(url: string, linkText?: string): Omit<Match, "label" | "url"> | null {
  let m: RegExpMatchArray | null;

  // URL-based PEP detection
  if ((m = url.match(PEP_OLD)) || (m = url.match(PEP_NEW))) {
    return { type: "pep", icon: pythonIcon };
  }

  // Text-based PEP detection — catches links like [PEP 799](https://docs.python.org/...)
  if (linkText && PEP_TEXT.test(linkText.trim())) {
    return { type: "pep", icon: pythonIcon };
  }

  // CPython docs — checked after PEP text so [PEP NNN](docs.python.org/...) stays a PEP badge
  if (DOCS.test(url)) {
    return { type: "docs", icon: docsIcon };
  }

  if ((m = url.match(PYPI))) {
    return { type: "pypi", icon: packageIcon };
  }

  if ((m = url.match(GITHUB))) {
    const [, owner, repo] = m;
    if (repo) {
      return { type: "gh-repo", icon: githubIcon };
    }
    if (!GH_RESERVED.has(owner.toLowerCase())) {
      return { type: "gh-user", icon: githubIcon };
    }
  }

  return null;
}

function buildBadgeHtml(match: Match): string {
  const cls = `ref-badge ref-${match.type}`;
  // Escape HTML in label
  const safeLabel = match.label
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
  return (
    `<a href="${match.url}" class="${cls}" target="_blank" rel="noopener noreferrer">` +
    `<span class="ref-icon">${match.icon}</span>` +
    `<span class="ref-label">${safeLabel}</span>` +
    `<span class="ref-external">${externalIcon}</span>` +
    `</a>`
  );
}

// ── Markdoc tag handling ────────────────────────────────
// Keystatic serializes inline components as Markdoc tags:
//   {% Pep number=649 /%}  or  {% Pep number=649 %}PEP 649{% /Pep %}

const MARKDOC_TAG =
  /\{%\s*(Pep|Docs|PyPi|GhRepo|GhUser)\s+([\s\S]*?)\s*(?:\/%\}|%\}[\s\S]*?\{%\s*\/\1\s*%\})/g;

const ATTR_RE = /(\w+)=(?:"([^"]*?)"|(\S+))/g;

function parseAttrs(str: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  let m: RegExpExecArray | null;
  while ((m = ATTR_RE.exec(str)) !== null) {
    attrs[m[1]] = m[2] ?? m[3];
  }
  ATTR_RE.lastIndex = 0;
  return attrs;
}

function markdocTagToBadge(tag: string, attrs: Record<string, string>): string | null {
  switch (tag) {
    case "Pep": {
      const num = attrs.number;
      if (!num) return null;
      const padded = String(num).padStart(4, "0");
      return buildBadgeHtml({
        type: "pep",
        icon: pythonIcon,
        label: `PEP ${num}`,
        url: `https://peps.python.org/pep-${padded}/`,
      });
    }
    case "Docs": {
      const path = attrs.path;
      if (!path) return null;
      const label = attrs.label ?? path.replace(/^\//, "").replace(/\.html$/, "").split("/").pop()!;
      return buildBadgeHtml({
        type: "docs",
        icon: docsIcon,
        label,
        url: `https://docs.python.org/${path.replace(/^\//, "")}`,
      });
    }
    case "PyPi": {
      const name = attrs.name;
      if (!name) return null;
      return buildBadgeHtml({
        type: "pypi",
        icon: packageIcon,
        label: name,
        url: `https://pypi.org/project/${name}/`,
      });
    }
    case "GhRepo": {
      const repo = attrs.repo;
      if (!repo) return null;
      return buildBadgeHtml({
        type: "gh-repo",
        icon: githubIcon,
        label: repo.split("/").pop()!,
        url: `https://github.com/${repo}`,
      });
    }
    case "GhUser": {
      const name = attrs.name;
      if (!name) return null;
      return buildBadgeHtml({
        type: "gh-user",
        icon: githubIcon,
        label: `@${name}`,
        url: `https://github.com/${name}`,
      });
    }
    default:
      return null;
  }
}

/** Split a text value on Markdoc tags, returning text + html nodes. */
function splitMarkdocTags(value: string): Array<{ type: "text"; value: string } | { type: "html"; value: string }> {
  const parts: Array<{ type: "text"; value: string } | { type: "html"; value: string }> = [];
  let lastIndex = 0;

  MARKDOC_TAG.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = MARKDOC_TAG.exec(value)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ type: "text", value: value.slice(lastIndex, m.index) });
    }
    const html = markdocTagToBadge(m[1], parseAttrs(m[2]));
    if (html) {
      parts.push({ type: "html", value: html });
    } else {
      parts.push({ type: "text", value: m[0] });
    }
    lastIndex = m.index + m[0].length;
  }

  if (lastIndex < value.length) {
    parts.push({ type: "text", value: value.slice(lastIndex) });
  }

  return parts;
}

// ── Plugin ──────────────────────────────────────────────

export default function remarkPythonRefs() {
  return (tree: Root) => {
    // Pass 1: Transform matching links → badges
    visit(tree, "link", (node: Link, index, parent) => {
      if (index == null || !parent) return;

      const label = extractText(node.children);
      const info = classify(node.url, label);
      if (!info) return;

      const html = buildBadgeHtml({ ...info, label, url: node.url });

      // Replace the link node with a raw HTML node
      (parent.children as any)[index] = {
        type: "html",
        value: html,
      };
    });

    // Pass 2: Transform Markdoc inline tags (from Keystatic) → badges
    visit(tree, "paragraph", (node: Paragraph) => {
      let changed = false;
      const newChildren: PhrasingContent[] = [];

      for (const child of node.children) {
        if (child.type !== "text" || !MARKDOC_TAG.test(child.value)) {
          MARKDOC_TAG.lastIndex = 0;
          newChildren.push(child);
          continue;
        }

        MARKDOC_TAG.lastIndex = 0;
        changed = true;
        const parts = splitMarkdocTags(child.value);
        for (const part of parts) {
          newChildren.push(part as any);
        }
      }

      if (changed) {
        node.children = newChildren;
      }
    });
  };
}
