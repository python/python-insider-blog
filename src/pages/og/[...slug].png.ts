import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgImage } from "../../lib/og-image";

// Load Inter font from Google Fonts at build time
async function loadFont(
  weight: number,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src: url\((.+?)\) format/);
  if (!match?.[1]) throw new Error(`Failed to load Inter ${weight}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

let fontsPromise: Promise<
  { name: string; data: ArrayBuffer; weight: 400 | 600 | 700; style: "normal" }[]
> | null = null;

function getFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      loadFont(400).then((data) => ({ name: "Inter" as const, data, weight: 400 as const, style: "normal" as const })),
      loadFont(600).then((data) => ({ name: "Inter" as const, data, weight: 600 as const, style: "normal" as const })),
      loadFont(700).then((data) => ({ name: "Inter" as const, data, weight: 700 as const, style: "normal" as const })),
    ]);
  }
  return fontsPromise;
}

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
