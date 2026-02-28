import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgPageImage } from "../../lib/og-image";
import { getFonts } from "../../lib/og-fonts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const allPosts = await getCollection("posts");
  const postCount = allPosts.filter((p) => p.data.published).length;

  const fonts = await getFonts();

  const svg = await satori(
    OgPageImage({
      title: "Blog",
      subtitle: "News and updates from the Python core development team.",
      detail: `${postCount} posts`,
    }),
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
