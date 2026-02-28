import type { APIRoute } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { OgPageImage } from "../../lib/og-image";
import { getFonts } from "../../lib/og-fonts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const fonts = await getFonts();

  const svg = await satori(
    OgPageImage({
      title: "Python Insider",
      subtitle: "The official blog of the Python core development team.",
      detail: "blog.python.org",
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
