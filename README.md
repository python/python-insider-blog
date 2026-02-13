## Python Insider Blog

Blog for Python core team, mostly for blogging about releases.

## About

Uses keystatic for WYSIWYG editing.

Features some custom components like:

- GitHub User, Repo
- PyPI Project
- CPython Docs

Utilizes Bun for builds. Uses Astro.js which builds statically at build time.
Pre-commit config, powered by Prek to do CI things and spellchecks.

### From Blogger

Migrated from Blogger with a field on new posts of "Previous Blogger URL"
so that we can more easily redirect.

### Posts

Posts are structured under `content/posts/`.
They have the directory named after the blog entry title.

Inside is the core markdown (index.md) and optionally the images
used in the blog entry.

### Authors

Authors are configured via `content/authors/`.

## Contributing

There are `Make` targets to get up and going, assuming you have the
tooling required (Bun, prek, etc.)

### Writing Blog Entries

You can pull the repo, run `make dev`, and edit the page via Keystatic
with the nice UI or you can write markdown in your editor.

Both should open a pull request to GitHub for review and CI checks.

> [!NOTE]  
> You have access to a few custom components that can be used like
> `{% GhUser name="hugovk" /%}`, but PEPs, CPython docs, and GitHub links
> will automatically be picked up if you use standard markdown via the
> URL regex.
