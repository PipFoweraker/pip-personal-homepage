# Site Documentation

Pip Foweraker's personal website, built with [Eleventy (11ty)](https://www.11ty.dev/).

## Quick Start

```bash
npm install          # Install dependencies
npm start            # Dev server at http://localhost:8080
npm run build        # Production build to _site/
```

## Directory Structure

```
src/
    _data/           # Global data files
        beta.js      # Beta collection tracker + card database
    _includes/       # Templates and layouts
        base.njk     # Base HTML template
        essay.njk    # Essay page template
        note.njk     # Note page template
    assets/          # Static files (CSS, JS, images)
    essays/          # Published essays
        drafts/      # Draft essays (unlisted)
    notes/           # Short-form notes
    *.md, *.njk      # Page content

scripts/             # CLI tools
    stage-essay.sh   # Stage essay from ~/Writing/essays/
    publish-essay.sh # Publish draft essay

_site/               # Build output (gitignored)
docs/                # Documentation
```

## Content Workflows

### Essays

Essays follow a non-destructive staging workflow:

1. Write essays in `~/Writing/essays/`
2. Stage for preview: `npm run stage essay-name`
3. Share unlisted draft URL for review
4. Publish: `npm run publish-essay essay-name`

See [ESSAYS.md](./ESSAYS.md) for full documentation.

### Beta Collection

The `/beta/` page tracks progress toward a complete Limited Edition Beta set of Magic: the Gathering. Card data lives in `src/_data/beta.js`:

- **Uncomment card names** in the `have` array as you acquire them
- **Add card names** to `forTrade` for extras available for trading
- **Add notes** to `cardNotes` for condition, provenance, etc.
- **Update `lastUpdated`** when you change the collection

The card database (292 unique cards + 10 basic land art variants = 302 total) is sourced from Scryfall and stored in the same file below the user-editable section.

### Pages

Standard pages live in `src/` as Markdown files with Nunjucks templating:

```yaml
---
layout: base.njk
title: Page Title
description: Meta description
---

Page content in Markdown...
```

## Development

### Local Server

```bash
npm start
```

Starts Eleventy with live reload at `http://localhost:8080`.

### Build

```bash
npm run build
```

Outputs static site to `_site/`.

### Debug

```bash
npm run debug
```

Runs build with Eleventy debug logging.

## Deployment

The site deploys to Dreamhost via GitHub Actions on push to `master`. See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

## Adding Content

### New Page

Create `src/page-name.md`:

```yaml
---
layout: base.njk
title: Page Title
---

Content here.
```

Add to navigation in `src/_includes/base.njk` if needed.

### New Essay

Use the essay workflow documented in [ESSAYS.md](./ESSAYS.md).

## Customization

### Templates

- `src/_includes/base.njk` - Site-wide HTML structure, navigation, footer
- `src/_includes/essay.njk` - Essay page layout with metadata display

### Styles

CSS lives in `src/assets/css/`. The base template loads `base.css`.

### Configuration

Eleventy configuration is in `.eleventy.js`:
- Passthrough copies for assets
- Custom filters (date formatting, slugify, startsWith)
- Markdown-it configuration
- Collections (essays, drafts, notes)
- Data files (`beta.js` for collection tracking)
