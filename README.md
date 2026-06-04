# OpenMined Brand Reference

Canonical source for OpenMined's brand tokens, UI primitives, and logo assets. Every OpenMined project — the main website, sub-brand sites, product pages, and AI-assisted builds — pulls from this repo.

The `brand-reference/` directory is an Astro site that deploys this repo as a living reference at **brand.openmined.org**.

---

## What's in this repo

```
openmined-brand-reference/
  tokens/
    tokens.css        All CSS custom properties — colors, spacing, type, shadows, z-index, grid
    global.css        Resets, base element styles, section theming, .prose, link utilities
    typography.css    Type scale utility classes, prose heading scale
  components/
    Button.astro      Primary CTA / action element
    Link.astro        Inline, nav, subtle, and absolute-cover link variants
    Tag.astro         Pill label for categories and metadata
    Card.astro        Bordered content container
    ThemeToggle.astro Sliding theme switch (40×20px)
    MiniToggle.astro  Compact theme switch (20×11px, header corner)
    Input.astro       Text input
    Textarea.astro    Multi-line text input
    Select.astro      Dropdown select
    Checkbox.astro    Checkbox with label
    Radio.astro       Radio button with label
    Blockquote.astro  Pull quote
    CodeBlock.astro   Syntax-highlighted code block with copy button
    DiamondEmbed.astro  SDF WebGL animated diamond graphic
    StreamEmbed.astro   Gradient WebGL animated stream graphic
  assets/
    logos/            All approved logo SVG files (see below)
    icons/            Custom SVG icons — empty until brand icons are defined
  brand-reference/    Astro site → deploys to brand.openmined.org
  CLAUDE.md           Full usage guide for AI and human collaborators
  README.md           This file
```

---

## Running the brand reference site locally

```bash
cd brand-reference
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to brand-reference/dist/
npm run preview   # preview the static build
```

The brand reference imports tokens and components from the root `tokens/` and `components/` directories via `@tokens` and `@brand` path aliases. No separate install needed for those.

---

## Using this repo in a project

Copy brand assets into the project's `src/brand/` directory:

```bash
# From a local clone (fastest)
cp -r tokens/     path/to/project/src/brand/tokens/
cp -r components/ path/to/project/src/brand/components/
cp -r assets/icons/ path/to/project/src/brand/assets/icons/
cp assets/logos/*.svg path/to/project/public/logos/

# Record which commit you synced from
git rev-parse HEAD > path/to/project/src/brand/brand-version.txt
```

Then add path aliases in the project's `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@brand':  path.resolve(__dirname, 'src/brand/components'),
        '@tokens': path.resolve(__dirname, 'src/brand/tokens'),
      },
    },
  },
});
```

Import in your layouts and components:

```astro
---
import '@tokens/tokens.css';
import '@tokens/global.css';
import '@tokens/typography.css';
import Button from '@brand/Button.astro';
import Link from '@brand/Link.astro';
---
```

No local clone? Fetch files from GitHub raw:
`https://raw.githubusercontent.com/OpenMined/openmined-brand-reference/main/tokens/tokens.css`

See `CLAUDE.md` for the full sync guide, color mode system, icon system, and peer dependency setup.

---

## Approved logo files

**Horizontal lockup**
| File | Background |
|---|---|
| `OpenMined-Logo.svg` | Light — full color, primary |
| `OpenMined-Logo-Dark.svg` | Dark — reversed / white |
| `OpenMined-Logo-Ghost.svg` | Dark — ghost / transparent |
| `OpenMined-Logo-Mono-White.svg` | Dark — white monochrome |
| `OpenMined-Logo-Mono-Black.svg` | Light — black monochrome |

**Stacked lockup**
| File | Background |
|---|---|
| `OpenMined-Logo-Stacked.svg` | Light — full color |
| `OpenMined-Logo-Stacked-Dark.svg` | Dark — reversed / white |
| `OpenMined-Logo-Stacked-Ghost.svg` | Dark — ghost / transparent |
| `OpenMined-Logo-Stacked-Mono-White.svg` | Dark — white monochrome |
| `OpenMined-Logo-Stacked-Mono-Black.svg` | Light — black monochrome |

**Icon mark**
| File | Notes |
|---|---|
| `OpenMined-Icon.svg` | Standalone diamond mark — favicon, small contexts |

Download SVGs directly from the brand reference site at brand.openmined.org.

---

## Color mode system

Elements can be locked to a surface context regardless of page theme using `data-section`:

| Value | Effect |
|---|---|
| `always-dark` | Forces dark surface + text tokens — use for elements that must always appear on a dark background |
| `always-light` | Forces light surface + text tokens — use for elements that must always appear on a light background (cards, panels) |
| `invert` | Flips surface with the page theme: dark in light mode, light in dark mode |

Inside any of these contexts, use semantic tokens (`--surface-background-default`, `--text-body`, etc.) — they resolve correctly without any hardcoded palette values.

---

## Peer dependencies

Projects using brand components must load **ionicons** in their base layout:

```html
<script type="module" src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"></script>
```

Replace with self-hosted files before production.
