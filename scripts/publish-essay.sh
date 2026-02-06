#!/bin/bash
# Publish a draft essay (move from drafts to published)
# Usage: ./scripts/publish-essay.sh essay-slug
#
# Moves src/essays/drafts/{slug}.md -> src/essays/{slug}.md
# Stages the change in git (user commits manually)

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 essay-slug"
    echo "  Moves src/essays/drafts/{slug}.md to src/essays/"
    exit 1
fi

ESSAY_SLUG="$1"
SOURCE="src/essays/drafts/${ESSAY_SLUG}.md"
DEST="src/essays/${ESSAY_SLUG}.md"

if [ ! -f "$SOURCE" ]; then
    echo "Error: Draft not found: $SOURCE"
    exit 1
fi

if [ -f "$DEST" ]; then
    echo "Error: Published essay already exists: $DEST"
    echo "Remove it first if you want to replace it."
    exit 1
fi

# Move file
mv "$SOURCE" "$DEST"

# Remove draft status from frontmatter if present
# (drafts.json adds status: draft, but we want to remove it for published)
if grep -q "^status: draft" "$DEST"; then
    sed -i 's/^status: draft$/status: published/' "$DEST"
fi

# Stage changes in git
git add "$DEST"
git add "$SOURCE" 2>/dev/null || true  # Stage removal (may already be staged)

echo "Published: $SOURCE -> $DEST"
echo "Live at: /essays/${ESSAY_SLUG}/"
echo ""
echo "Changes staged. Run 'git commit' to finalize."
