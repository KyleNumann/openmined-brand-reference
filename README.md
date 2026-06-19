# OpenMined Brand Reference

Canonical brand tokens, UI primitives, and logo assets for all OpenMined projects. An Astro site at the repo root deploys as a living reference at **brand.openmined.org**.

## Run the brand reference locally

```bash
npm install && npm run dev
```

## Use in a project

Brand assets sync as a local copy into the consuming project's `src/brand/` — not installed as a package. Logo SVGs are served from `public/logos/`. Record the brand repo commit SHA in `src/brand/brand-version.txt` as the sync audit trail.

See `AGENTS.md` for sync approaches, usage rules, and the color mode system — it's the model-independent canonical guide for any AI tool or human (`CLAUDE.md` just imports it).

## Peer dependency

Projects must load **ionicons** in their base layout (CDN for development, self-hosted for production).
