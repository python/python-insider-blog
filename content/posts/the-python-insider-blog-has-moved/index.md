---
title: The Python Insider Blog Has Moved!
publishDate: '2026-03-03'
updatedDate: '2026-03-03'
author: Jacob Coffee
description: 'Python Insider now lives at blog.python.org, backed by a Git repository. All 307 posts from the Blogger era have been migrated, and old URLs redirect automatically.'
tags:
  - python
  - community
published: true
legacyUrl: /2026/03/the-python-insider-blog-has-moved.html
---

Python Insider now lives at [blog.python.org](https://blog.python.org), backed by a Git repository. All 307 posts from the Blogger era have been migrated over, and old URLs redirect to the new ones automatically. Your RSS readers should pick up the new feed without any action on your part, but if something looks off, the new feed URL is [blog.python.org/rss.xml](https://blog.python.org/rss.xml).

## Why we moved

Blogger worked fine for a long time, but contributing to the blog meant having a Google account and using Blogger's editor. That's a higher bar than it needs to be. The new setup is just Markdown files in a Git repo. If you can open a pull request, you can write a post.

Posts live in `content/posts/{slug}/index.md` with YAML frontmatter for the title, date, authors, and tags. Images go right next to the post in the same directory. No special tooling required beyond a text editor.

## Contributing

Want to write about a Python release, core sprint, governance update, or anything else that belongs on the official Python blog? Here's the short version:

1. Fork [python/python-insider-blog](https://github.com/python/python-insider-blog)
2. Create a new directory under `content/posts/` with your post slug
3. Add an `index.md` with your content (and optionally upload your images)
4. Open a PR

The repo README has more detail on frontmatter fields and local development if you want to preview your post before submitting.

## What's new on the site

Beyond the content itself, the new site has a few features the old Blogger setup never had:

- **[Browse all posts](/blog/)** with pagination and a tag sidebar for filtering by topic. You can also filter by [year](/blog/year/2025) to find posts from a specific period.
- **[Authors page](/authors/)** listing every contributor and how many posts they've written. Each author has their own page showing all of their posts.
- **[Tags page](/tags/)** with every tag and its post count, so you can quickly find all release announcements, security updates, or community posts.
- **Search** via the command palette — hit `Ctrl+K` (or `Cmd+K` on Mac) from any page to search across all 307+ posts instantly.
- **RSS feed** at [blog.python.org/rss.xml](https://blog.python.org/rss.xml), compatible with the old Blogger feed URL so existing subscribers don't need to change anything.
- **Dark mode** that follows your system preference.
- **Open Graph images** generated automatically for every post, so links shared on social media get proper preview cards.

## What's under the hood

The site is built with [Astro](https://astro.build) and deployed as fully static HTML. There's a [Keystatic](https://keystatic.com) CMS available in dev mode if you prefer a visual editor over raw Markdown, but it's entirely optional. Tailwind handles the styling. The whole thing builds and deploys through GitHub Actions.

## Links

- New site: [blog.python.org](https://blog.python.org)
- Repository: [github.com/python/python-insider-blog](https://github.com/python/python-insider-blog)
- RSS feed: [blog.python.org/rss.xml](https://blog.python.org/rss.xml)

If you spot broken links, missing images, or formatting issues from the migration, [file an issue](https://github.com/python/python-insider-blog/issues) on the repo. PRs are welcome too.
