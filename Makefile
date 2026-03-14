.DEFAULT_GOAL := help
SHELL := /bin/bash

## General

.PHONY: help
help: ## Show this help message
	@echo ""
	@echo "Usage:"
	@echo "  make <target>"
	@echo ""
	@awk 'BEGIN {FS = ":.*?## "; section=""} \
		/^## / { section=substr($$0, 4); next } \
		/^[a-zA-Z_-]+:.*?## / { \
			if (section != prev) { printf "\n\033[1m%s\033[0m\n", section; prev=section } \
			printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 \
		}' $(MAKEFILE_LIST)
	@echo ""

.PHONY: check-deps
check-deps: ## Verify required tools are installed
	@command -v bun >/dev/null 2>&1 || { \
		echo ""; \
		echo "  bun is required but not installed."; \
		echo ""; \
		echo "  Install:"; \
		echo "    macOS:       brew install oven-sh/bun/bun"; \
		echo "    Linux/WSL:   curl -fsSL https://bun.sh/install | bash"; \
		echo ""; \
		echo "  See: https://bun.sh/docs/installation"; \
		echo ""; \
		exit 1; \
	}

.PHONY: install
install: check-deps ## Install dependencies and git hooks
	bun install
	@if command -v prek >/dev/null 2>&1; then \
		prek install; \
	else \
		echo "prek not found — skipping git hook setup (optional, see README)"; \
	fi

## Development

.PHONY: dev
dev: check-deps ## Start development server
	bun run dev

.PHONY: preview
preview: check-deps ## Build and preview production locally
	bun run preview

## Build

.PHONY: build
build: check-deps ## Build production bundle
	bun run build

.PHONY: clean
clean: ## Clean build artifacts and caches
	rm -rf dist .astro node_modules/.astro

## Quality

.PHONY: lint
lint: check-deps ## Run oxlint on source files
	bunx oxlint src/

.PHONY: typecheck
typecheck: check-deps ## Run TypeScript type checking
	bunx astro check

.PHONY: check
check: lint typecheck ## Run all checks (typecheck + lint)

.PHONY: spellcheck
spellcheck: ## Run spell checker on all files
	prek run typos --all-files

.PHONY: pre-commit
pre-commit: ## Run all pre-commit hooks
	prek run --all-files

## Content

.PHONY: migrate
migrate: ## Migrate Blogger posts
	bun run scripts/migrate-blogger.ts

.PHONY: content-new-author
content-new-author: ## Create a new author (ID=author-id NAME="Author Name")
	@if [ -z "$(ID)" ] || [ -z "$(NAME)" ]; then \
		echo "Usage: make content-new-author ID=author-id NAME=\"Author Name\""; exit 1; fi
	@echo '{"name":"$(NAME)","bio":"","github":"","avatar":"","twitter":"","bluesky":"","mastodon":"","website":"","featured":false}' \
		| python3 -m json.tool > content/authors/$(ID).json
	@echo "Created content/authors/$(ID).json"

## Maintenance

.PHONY: fresh
fresh: clean ## Clean install (remove node_modules and reinstall)
	rm -rf node_modules bun.lock
	bun install

.PHONY: update
update: ## Update all dependencies
	bun update
