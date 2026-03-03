export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Prepends the configured Astro base path to an absolute path.
 * Dev: "/" + "/blog" → "/blog"
 * Prod: "/python-insider-blog/" + "/blog" → "/python-insider-blog/blog"
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Returns the URL path for a blog post: /YYYY/MM/slug
 */
export function postUrl(slug: string, publishDate: string | Date): string {
  const d = typeof publishDate === "string" ? new Date(publishDate) : publishDate;
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `/${year}/${month}/${slug}`;
}

/**
 * Converts markdown-style links [text](url) in a description to HTML anchor tags.
 */
export function renderDescriptionLinks(desc: string): string {
  return desc.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-amber-700 underline hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-300">$1</a>',
  );
}

/**
 * Strips markdown-style links [text](url) to plain text for meta tags.
 */
export function stripDescriptionLinks(desc: string): string {
  return desc.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u0141\u0142]/g, "l")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
