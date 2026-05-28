# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server (localhost:4321)
pnpm build      # production build to dist/
pnpm preview    # preview the production build
```

There are no tests or linting scripts configured.

## Architecture

This is an **Astro 6** static landing page for "The Way" — a Bible reading app currently in private beta.

### i18n pattern

All user-facing text lives in [src/i18n/translations.ts](src/i18n/translations.ts), which exports two typed objects (`es` and `en`) implementing the `Translations` interface. Pages select a locale at build time by importing the appropriate export and passing `t` + `lang` as props down to every component.

- `/` (Spanish) → imports `es`
- `/en/` (English) → imports `en`
- `/privacy` and `/en/privacy` follow the same pattern

There is no runtime locale detection — each URL serves a statically-built HTML file.

### Page structure

Each page ([src/pages/index.astro](src/pages/index.astro)) composes: `Layout` → `Navbar` + `Hero` + `Features` + `Scripture` + `Download` + `Footer`. All components are in [src/components/](src/components/) and accept `t: Translations` (and sometimes `lang`) as props.

### Design system

Global CSS variables are defined in [src/layouts/Layout.astro](src/layouts/Layout.astro) under `:root`. Key tokens:

- `--gold` / `--gold-hover`: primary brand accent (`#b28436` / `#9a7030`)
- `--font-serif`: Playfair Display — used for headings and italic emphasis
- `--font-sans`: Inter — used for body text
- `--fill-1` through `--fill-4`: warm neutral background fills
- `--text` / `--text-dark`: body and heading text colors

### Adding a new language

1. Add a new export to `translations.ts` implementing `Translations`
2. Create `src/pages/<locale>/index.astro` and `src/pages/<locale>/privacy.astro` mirroring the existing pattern
3. Add the `hreflang` alternate link in `Layout.astro`
