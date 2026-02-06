#!/bin/bash
# Stage an essay from ~/Writing/essays/ to src/essays/drafts/
# Usage: ./scripts/stage-essay.sh essay-name
#
# Non-destructive: copies file, never modifies source

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 essay-name"
    echo "  Copies ~/Writing/essays/{essay-name}.md to src/essays/drafts/"
    exit 1
fi

ESSAY_NAME="$1"
SOURCE="$HOME/Writing/essays/${ESSAY_NAME}.md"
DEST="src/essays/drafts/${ESSAY_NAME}.md"

if [ ! -f "$SOURCE" ]; then
    echo "Error: Source file not found: $SOURCE"
    exit 1
fi

if [ -f "$DEST" ]; then
    echo "Warning: Destination already exists: $DEST"
    read -p "Overwrite? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
fi

cp "$SOURCE" "$DEST"
echo "Staged: $SOURCE -> $DEST"
echo "Preview at: /essays/drafts/${ESSAY_NAME}/"
