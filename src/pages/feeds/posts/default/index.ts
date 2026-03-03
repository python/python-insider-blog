// Serve RSS at the old Blogger feed URL so RSS readers don't break.
// See: https://github.com/python/python-insider-blog/issues/16
import type { APIContext } from "astro";
import { GET as rssGet } from "../../../rss.xml";

export const prerender = true;

export const GET = (context: APIContext) => rssGet(context);
