import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "*/index.{md,mdx}", base: "./content/posts" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    legacyUrl: z.string().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "*.json", base: "./content/authors" }),
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    github: z.string().optional(),
    avatar: z.string().optional(),
    twitter: z.string().optional(),
    bluesky: z.string().optional(),
    mastodon: z.string().optional(),
    website: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts, authors };
