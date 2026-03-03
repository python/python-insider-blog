## Python Insider Blog

The official blog for the Python core team — mostly release announcements.

Built with [Astro](https://astro.build/) and [Keystatic](https://keystatic.com/) CMS.
Content is plain Markdown, built statically at deploy time.

## Quickstart

### Prerequisites

**Bun** — the JavaScript runtime used for this project.

```bash
# macOS
brew install oven-sh/bun/bun

# Linux / WSL
curl -fsSL https://bun.sh/install | bash

# Windows — use WSL, then the Linux command above
```

See [bun.sh/docs/installation](https://bun.sh/docs/installation) for other methods.

**prek** (optional) — runs pre-commit hooks locally. Only needed if you want
to run linting/spellcheck before pushing. CI will catch these regardless.

```bash
# macOS
brew install prefix-dev/prek/prek

# Linux / Windows (standalone installer)
curl -fsSL https://prek.j178.dev/install.sh | bash

# Or via cargo / pip / other methods
cargo install prek
```

See [prek.j178.dev/installation](https://prek.j178.dev/installation/#standalone-installer)
for all installation options.

> [!NOTE]
> **Windows users**: The Makefile requires a Unix shell. Use
> [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) or Git Bash.
> Alternatively, skip `make` and run the bun commands directly (see table below).

### Setup

```bash
git clone https://github.com/python/python-insider-blog.git
cd python-insider-blog
make install   # installs node_modules + git hooks
make dev       # starts dev server at http://127.0.0.1:4321
```

`make install` runs `bun install` (dependencies) and `prek install` (git hooks).
If you don't have prek installed, the hook setup will fail but everything else
still works — you can write and preview posts without it.

## Writing a blog post

### Option A: Use the Keystatic UI (recommended)

1. Run `make dev`
2. Open http://127.0.0.1:4321/keystatic in your browser
3. Create or edit a post with the visual editor
4. Commit and open a pull request

### Option B: Write Markdown directly

Create a new directory under `content/posts/` named after your post slug,
with an `index.md` inside:

```
content/posts/python-31213-31115-31020/
└── index.md
```

Frontmatter fields:

```yaml
---
title: "Python 3.12.13, 3.11.15, and 3.10.20 are now available"
description: "Security fix release for Python 3.12, 3.11, and 3.10"
authors:
  - thomas-wouters
tags:
  - "3.12"
  - "3.11"
  - "3.10"
pubDate: 2026-03-03
draft: false
previousBloggerUrl: ""
---
```

Then write the body in standard Markdown. Open a PR when done.

> [!TIP]
> Links to PEPs, CPython docs, PyPI, GitHub repos/issues, CVEs, and
> python.org releases are automatically styled as inline reference badges.
> Just use normal Markdown links — no special syntax needed.
>
> If you're using the Keystatic editor, you also have access to explicit
> inline components: `{% GhUser name="hugovk" /%}`, `{% Pep number=649 /%}`, etc.

### Authors

Author profiles live in `content/authors/{id}.json`. If you're writing your
first post, create one (or use the Make target):

```bash
make content-new-author ID=your-name NAME="Your Name"
```

Then edit the JSON to add your GitHub handle, avatar URL, etc.

## Development

| Make target        | Without make             | What it does                         |
| ------------------ | ------------------------ | ------------------------------------ |
| `make install`     | `bun install`            | Install dependencies (+ git hooks)   |
| `make dev`         | `bun run dev`            | Start Astro dev server               |
| `make build`       | `bun run build`          | Production build                     |
| `make preview`     | `bun run preview`        | Build and preview production locally |
| `make check`       | `bun run lint && bun run typecheck` | Run linter + type checker |
| `make spellcheck`  | —                        | Run typos spell checker (needs prek) |
| `make clean`       | —                        | Remove build artifacts and caches    |
| `make fresh`       | —                        | Full clean reinstall                 |

Run `make help` for the complete list.

## Project structure

```
content/
  authors/       # Author profiles (JSON)
  posts/         # Blog posts (Markdown + images)
src/
  components/    # Astro/React components
  layouts/       # Page layouts
  pages/         # Astro routes
  plugins/       # Remark plugins (reference badges, etc.)
  assets/        # Styles, fonts
```
