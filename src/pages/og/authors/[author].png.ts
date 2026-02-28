import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgAuthorImage } from "../../../lib/og-image";
import { getFonts } from "../../../lib/og-fonts";
import { slugify } from "../../../lib/utils";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getCollection("posts");
  const publishedPosts = allPosts.filter((p) => p.data.published);
  const allAuthors = await getCollection("authors");

  const authorCounts = new Map<string, number>();
  for (const post of publishedPosts) {
    const slug = slugify(post.data.author);
    authorCounts.set(slug, (authorCounts.get(slug) || 0) + 1);
  }

  return allAuthors
    .filter((a) => authorCounts.has(a.id))
    .map((author) => ({
      params: { author: author.id },
      props: {
        name: author.data.name,
        bio: author.data.bio,
        postCount: authorCounts.get(author.id) || 0,
      },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  const { name, bio, postCount } = props as { name: string; bio?: string; postCount: number };

  const fonts = await getFonts();

  const svg = await satori(
    OgAuthorImage({ name, bio, postCount }),
    { width: 1200, height: 630, fonts },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } });
  const png = resvg.render().asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
