# Essay Publishing Workflow

## Quick Reference (Pip)

```bash
# Stage an essay for review
npm run stage my-essay-name

# Preview locally
npm start
# Visit: http://localhost:8080/essays/drafts/my-essay-name/

# Publish when ready
npm run publish-essay my-essay-name
git commit -m "Publish: My Essay Name"
```

**The workflow:**
1. Write in `~/Writing/essays/` (your usual writing location)
2. Stage to drafts when ready for preview/feedback
3. Share the unlisted draft URL for review
4. Publish when finalized

**Key points:**
- Source files are never modified or deleted (non-destructive)
- Drafts are unlisted (not in nav, not on /essays/, not in RSS)
- Draft URLs are shareable for review
- Publishing stages git changes automatically; you commit manually

---

## How It Works

### Directory Structure

```
~/Writing/essays/           # Your source essays (never touched by scripts)
    my-essay.md

src/essays/                 # Published essays (appear on /essays/ page)
    essays.json             # Collection defaults
    published-essay.md

    drafts/                 # Draft essays (unlisted preview URLs)
        drafts.json         # Draft defaults (adds status: draft)
        work-in-progress.md
```

### Essay Frontmatter

Essays use the `essay.njk` template. Supported frontmatter:

```yaml
---
title: Essay Title
description: Brief description for listings and meta tags
created: 2026-02-04
modified: 2026-02-05      # Optional, shown if different from created
status: draft             # Optional, shown in page meta
confidence: likely        # Optional, shown in page meta
tags:
  - topic
  - another-topic
---
```

The `drafts.json` automatically adds `status: draft` to drafts. When published, you can remove or change this.

### URLs

- Published: `/essays/{slug}/`
- Drafts: `/essays/drafts/{slug}/`

Draft URLs work and are shareable, but aren't linked from anywhere public.

---

## Scripts

### `npm run stage <essay-name>`

Copies `~/Writing/essays/{essay-name}.md` to `src/essays/drafts/`.

- Non-destructive: source file is never modified
- Prompts before overwriting existing drafts
- Prints preview URL

### `npm run publish-essay <essay-slug>`

Moves `src/essays/drafts/{slug}.md` to `src/essays/`.

- Stages changes in git (you commit manually)
- Fails if a published essay with that slug already exists
- Prints live URL

---

## Collections

Two Eleventy collections are defined in `.eleventy.js`:

- `collections.essays` - Published essays only (`src/essays/*.md`)
- `collections.drafts` - Draft essays only (`src/essays/drafts/*.md`)

The essays index page (`/essays/`) only lists `collections.essays`. Drafts are excluded from navigation and RSS.

---

## Common Tasks

### Edit a published essay

Edit `src/essays/{slug}.md` directly. The source in `~/Writing/essays/` is your canonical copy; update it too if you want them in sync.

### Unpublish an essay

Move or delete `src/essays/{slug}.md`. To revert to draft status:

```bash
mv src/essays/my-essay.md src/essays/drafts/
```

### Update a draft with new source content

Re-run the stage command:

```bash
npm run stage my-essay
# Prompts to overwrite existing draft
```

### Preview multiple drafts

All drafts in `src/essays/drafts/` are built. Stage as many as you want.
