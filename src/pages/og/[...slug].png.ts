import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgImage } from "../../lib/og-image";
import { getFonts } from "../../lib/og-fonts";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("posts");
  return posts
    .filter((p) => p.data.published)
    .map((post) => ({
      params: { slug: post.id },
      props: {
        title: post.data.title,
        author: post.data.author,
        publishDate: post.data.publishDate,
        tags: post.data.tags,
      },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, author, publishDate, tags } = props as {
    title: string;
    author: string;
    publishDate: Date;
    tags: string[];
  };

  const date = publishDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const fonts = await getFonts();

  const svg = await satori(
    OgImage({ title, author, date, tags }),
    {
      width: 1200,
      height: 630,
      fonts,
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });
  const png = resvg.render().asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
