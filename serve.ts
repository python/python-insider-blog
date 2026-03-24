import { join, resolve } from "node:path";

const DIST = resolve(import.meta.dirname, "dist");
const SOCK = "/var/run/cabotage/cabotage.sock";

async function serveFile(filePath: string): Promise<Response | null> {
  const resolved = resolve(filePath);
  if (!resolved.startsWith(DIST)) return null;
  const file = Bun.file(resolved);
  if (await file.exists()) return new Response(file);
  return null;
}

Bun.serve({
  unix: SOCK,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = decodeURIComponent(url.pathname);

    // Try exact file
    let resp = await serveFile(join(DIST, pathname));
    if (resp) return resp;

    // Try as directory with index.html
    resp = await serveFile(join(DIST, pathname, "index.html"));
    if (resp) return resp;

    // Try with .html extension
    resp = await serveFile(join(DIST, pathname + ".html"));
    if (resp) return resp;

    // 404
    const notFound = await serveFile(join(DIST, "404.html"));
    if (notFound)
      return new Response(notFound.body, {
        status: 404,
        headers: notFound.headers,
      });
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on ${SOCK}`);
