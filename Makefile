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

.PHONY: install
install: ## Install dependencies and git hooks
	bun install
	prek install

## Development

.PHONY: dev
dev: ## Start development server
	bun run dev

.PHONY: preview
preview: ## Build and preview production locally
	bun run preview

## Build

.PHONY: build
build: ## Build production bundle
	bun run build

.PHONY: clean
clean: ## Clean build artifacts and caches
	rm -rf dist .astro node_modules/.astro

## Quality

.PHONY: lint
lint: ## Run oxlint on source files
	bunx oxlint src/

.PHONY: typecheck
typecheck: ## Run TypeScript type checking
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
