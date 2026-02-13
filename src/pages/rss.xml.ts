import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { withBase } from "../lib/utils";

export const prerender = true;

export async function GET(context: APIContext) {
  const allPosts = await getCollection("posts");
  const posts = allPosts
    .filter((p) => p.data.published)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
    .slice(0, 50);

  return rss({
    title: "Python Insider",
    description: "The official blog of the Python core development team.",
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description ?? "",
      link: withBase(`/blog/${post.id}/`),
      author: post.data.author,
      categories: post.data.tags,
    })),
  });
}
