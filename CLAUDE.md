# OpenMined Brand Reference

Canonical source for OpenMined's brand tokens, UI primitives, and logo assets. All OpenMined projects and sub-brands consume from this repo. The `brand-reference/` Astro site deploys here as brand.openmined.org.

**The code is canonical.** Check the files directly for what exists — don't rely on lists in this document.

## What is canonical here

- **`tokens/`** — all CSS custom properties and base styles. `tokens.css` is the single source of truth for every brand value; `global.css` covers resets, element defaults, section theming, and prose scope.
- **`components/`** — brand UI primitives as Astro components. Projects copy these locally.
- **`assets/logos/`** — all approved logo SVGs. The brand reference site has the full set with download links.
- **`assets/icons/`** — custom SVG icons when brand-specific glyphs are defined.
- **`brand-reference/`** — the Astro project that builds brand.openmined.org.

## What does NOT belong here

Site-specific layouts, sections, navigation, content, or anything tied to a particular project. `Logo.astro` is inherently project-specific (hardcodes logo paths) — each project ships its own. The logo SVG files are canonical here; the component is not.

## Color mode system

Tokens respond to `[data-theme="dark"]` on `<html>`. Three `data-section` values override this at the element level — apply to any element, not just `<section>`:

- **`always-dark`** — locks surface and text tokens to dark values regardless of page theme
- **`always-light`** — locks surface and text tokens to light values regardless of page theme
- **`invert`** — remaps surface tokens to the `--dark-surface-*` parallel set, which flips with the page theme (dark surface in light mode, light surface in dark mode)

**Rule:** inside any of these contexts, always use semantic tokens (`--surface-background-default`, `--text-body`, etc.) — never hardcoded palette values. The tokens resolve correctly for the context automatically.

`always-dark` and `always-light` are fixed — they never respond to the page theme. `invert` does.

## Icon system

Ionicons is the current peer dependency. Custom SVG icons go in `assets/icons/` and replace ionicons element-by-element when available. Each component that uses an ionicon names it in its file header.

## Using in a project

Copy `tokens/`, `components/`, and `assets/` into the consuming project's `src/brand/`. Serve logos from `public/logos/`. Record the brand repo commit SHA in `src/brand/brand-version.txt` as the audit trail. Any edits to files in `src/brand/` are intentional project-specific divergence — document what changed and why.

**Sync approaches (priority order):** local clone of this repo → GitHub raw file URLs → deployed brand reference at brand.openmined.org. No canonical sync script; use whichever approach is available and let the implementation follow from there.

## Peer dependencies

Projects must load ionicons in their base layout. CDN is fine for development; self-host before production.
