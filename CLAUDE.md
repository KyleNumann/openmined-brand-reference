# OpenMined Brand Reference

This is the canonical source for OpenMined's brand tokens, UI primitives, and logo assets.
It is used by all OpenMined projects and sub-brands.

The web deployment of this repo (**OpenMined Brand Reference**) replaces brand.openmined.org
as the authoritative brand resource for both human and AI collaborators.

## What is canonical here

- **`tokens/tokens.css`** — all CSS custom properties: color palette, semantic surface tokens,
  text tokens, spacing, border-radius, shadows, z-index, transitions, container/grid variables.
  This file is the single source of truth for every brand value.
- **`tokens/global.css`** — CSS reset, base element styles (body, headings), section theming
  (`[data-section="always-dark"]`, `[data-section="always-light"]`, `[data-section="invert"]`),
  container utilities, link animation patterns, form base styles, prose/long-form content scope.
- **`tokens/typography.css`** — type scale utility classes, prose heading scale.
- **`components/`** — all brand UI primitives (Button, Link, Tag, Card, form controls, toggles,
  Blockquote, CodeBlock). These are Astro components. Projects copy them locally.
- **`assets/logos/`** — all approved OpenMined logo SVG files for reference and download.
- **`assets/icons/`** — custom SVG icons, used in place of ionicons when brand-specific glyphs
  are available. Empty until custom icons are introduced.
- **`brand-reference/`** — the Astro project that builds and deploys the OpenMined Brand
  Reference web site (GitHub Pages, brand.openmined.org).

## What does NOT belong here

Site-specific layouts, page sections, navigation data, page content, anything that depends on
a specific project's structure. Those live in the consuming project's own repo.

Logo.astro (the Astro component that renders a logo with theme-switching) is **not** in this
repo — it is inherently project-specific (hardcodes logo paths). Each project ships its own.

## Directory structure

```
openmined-brand-reference/
  tokens/
    tokens.css        ← canonical token values — always authoritative
    global.css        ← base styles, resets, section theming, .prose, link utilities
    typography.css    ← type scale utilities, prose heading scale
  components/
    Button.astro      ← primary UI primitive
    Link.astro        ← link variants (inline, nav, absolute-cover, subtle)
    Tag.astro
    Card.astro
    ThemeToggle.astro ← slider toggle (40×20px)
    MiniToggle.astro  ← small slider toggle (20×11px, header corner use)
    Input.astro
    Textarea.astro
    Select.astro
    Checkbox.astro
    Radio.astro
    Blockquote.astro
    CodeBlock.astro
  assets/
    logos/            ← all approved logo SVG variants
    icons/            ← custom SVG icons (empty until brand icons are defined)
  brand-reference/    ← Astro project → GitHub Pages (brand.openmined.org)
  CLAUDE.md           ← this file
```

## Color mode system

All surface, foreground, and text tokens respond to the page theme via
`[data-theme="dark"]` on `<html>`. Three `data-section` values override this
at the element level — apply to any element, not just `<section>`:

| Value | Effect | Use when |
|---|---|---|
| `always-dark` | Locks all `--surface-*` and `--text-*` tokens to their dark values, regardless of page theme. | An element must always appear on a dark surface (e.g. footer, hero with dark bg). |
| `always-light` | Locks all `--surface-*` and `--text-*` tokens to their light values, regardless of page theme. | An element must always appear on a light surface — ensures dark text on light bg even in dark mode (e.g. logo cards with white bg, light-bg panels). |
| `invert` | Remaps `--surface-*` to the `--dark-surface-*` parallel set, which flips with the page theme. In light mode → dark surface; in dark mode → light surface. | Sections that should always contrast with the surrounding page (promotional panels, callout rows). |

**Rules:**
- Inside any of these contexts, use `var(--surface-background-default)` for backgrounds and `var(--text-headline)` / `var(--text-body)` for text — they resolve to the correct locked or flipped values automatically.
- Do NOT use hardcoded palette values (e.g. `--color-grayscale-850`) for text or backgrounds inside these contexts — the whole point is that semantic tokens adapt for you.
- `always-dark` and `always-light` use fixed palette references — they never change regardless of page theme.
- `invert` uses the `--dark-surface-*` parallel token set — it *does* respond to the page theme (dark surface in light mode, light surface in dark mode).
- `color-scheme: dark/light` is set on `always-dark` and `always-light` so browser-native elements (scrollbars, form controls) also adapt.

## Icon system

**Ionicons** is the current peer dependency for icon glyphs. Consuming projects load it via
a script tag in their base layout (CDN or self-hosted). Each component that uses an ionicon
names the icon in its file header so projects can swap it for a custom SVG from `assets/icons/`
when one is available.

ThemeToggle and MiniToggle are icon-free — clean sliding knob only.

To replace an ionicon with a custom SVG: swap the `<ion-icon name="...">` element for an
inline `<svg>` referencing the appropriate file from `assets/icons/`. No other changes needed.

## How to use this repo in a project

Copy the brand assets into the project's local `src/brand/` directory:

```
project/src/brand/
  tokens/
    tokens.css
    global.css
    typography.css
  components/
    Button.astro
    Link.astro
    … (all components)
  assets/
    icons/          ← copy assets/icons/ if custom icons are in use
brand-version.txt   ← record the brand repo commit SHA at sync time
```

Logo SVGs copy to the project's `public/logos/` (served as static assets). Within this repo,
`brand-reference/public/logos/` is a committed copy of `assets/logos/` — Vite's build pipeline
does not follow symlinks, so they must be kept in sync manually when logos change.

Record the brand repo commit SHA in `src/brand/brand-version.txt` — this is the audit trail
for which version of the brand assets the project is on.

**Any edits to files in `src/brand/` are intentional project-specific divergence.** Document
what was changed and why alongside the file. When syncing a brand update, review the diff and
decide what to keep (project overrides) vs. what to accept (upstream brand changes).

## How to sync brand assets into a project (no canonical script)

Use whichever approach matches what you have available:

**1. Local clone (preferred — fastest)**
If the brand repo is cloned locally (e.g., `../openmined-brand-reference/`), read files
directly from the filesystem and copy them into the project's `src/brand/`. Record the
current commit SHA in `brand-version.txt`.

**2. GitHub raw (no local clone)**
Fetch individual files from:
`https://raw.githubusercontent.com/OpenMined/openmined-brand-reference/main/<path>`

For example:
`https://raw.githubusercontent.com/OpenMined/openmined-brand-reference/main/tokens/tokens.css`

**3. Web reference (audit/discovery)**
Read the deployed brand reference at brand.openmined.org. Useful for auditing what the
canonical brand says, but fetch raw files for actual sync.

When syncing: copy `tokens/`, `components/`, and `assets/icons/`. Copy `assets/logos/` to
`public/logos/`. Update `brand-version.txt`. Review the diff carefully before committing —
preserve any intentional project-specific overrides.

## Peer dependencies for consuming projects

Projects that use brand components must load **ionicons** in their base layout:

```html
<!-- CDN (scaffold/dev) -->
<script type="module" src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"></script>
```

Replace with self-hosted files before production.

## Approved logo files

All variants sourced from brand.openmined.org. SVGs live in `assets/logos/`.

**Horizontal lockup**

| File | Background | Notes |
|---|---|---|
| `OpenMined-Logo.svg` | Light | Full color, primary |
| `OpenMined-Logo-Dark.svg` | Dark | Reversed / white |
| `OpenMined-Logo-Ghost.svg` | Dark | Ghost / transparent treatment |
| `OpenMined-Logo-Mono-White.svg` | Dark | White monochrome |
| `OpenMined-Logo-Mono-Black.svg` | Light | Black monochrome |

**Stacked lockup**

| File | Background | Notes |
|---|---|---|
| `OpenMined-Logo-Stacked.svg` | Light | Full color |
| `OpenMined-Logo-Stacked-Dark.svg` | Dark | Reversed / white |
| `OpenMined-Logo-Stacked-Ghost.svg` | Dark | Ghost / transparent treatment |
| `OpenMined-Logo-Stacked-Mono-White.svg` | Dark | White monochrome |
| `OpenMined-Logo-Stacked-Mono-Black.svg` | Light | Black monochrome (derived from Mono-White) |

**Icon mark**

| File | Background | Notes |
|---|---|---|
| `OpenMined-Icon.svg` | Dark | Standalone diamond mark |

When logos change: update `assets/logos/` in this repo, copy to `brand-reference/public/logos/`
(Vite does not follow symlinks), and sync to consuming projects' `public/logos/`.
