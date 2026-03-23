#!/bin/bash
# Snapshot a draft essay or note as a timestamped copy
# Usage: ./scripts/snapshot.sh <name> [--note]
#
# Without --note: snapshots src/essays/drafts/<name>.md
#   -> src/essays/drafts/.versions/<name>/YYYY-MM-DD-HH-MM-SS.md
#
# With --note: snapshots src/notes/<name>.md
#   -> src/notes/.versions/<name>/YYYY-MM-DD-HH-MM-SS.md
#
# .versions/ dirs start with '.' so Eleventy ignores them by default.
# Non-destructive: never modifies the source file.

set -e

usage() {
    echo "Usage: $0 <name> [--note]"
    echo "  <name>   slug of the essay draft or note to snapshot"
    echo "  --note   snapshot a note instead of a draft essay"
    exit 1
}

if [ -z "$1" ]; then
    usage
fi

NAME="$1"
IS_NOTE=false

if [ "$2" = "--note" ]; then
    IS_NOTE=true
fi

if $IS_NOTE; then
    SOURCE="src/notes/${NAME}.md"
    VERSIONS_DIR="src/notes/.versions/${NAME}"
else
    SOURCE="src/essays/drafts/${NAME}.md"
    VERSIONS_DIR="src/essays/drafts/.versions/${NAME}"
fi

if [ ! -f "$SOURCE" ]; then
    echo "Error: Source file not found: $SOURCE"
    exit 1
fi

TIMESTAMP=$(date +"%Y-%m-%d-%H-%M-%S")
SNAPSHOT="${VERSIONS_DIR}/${TIMESTAMP}.md"

mkdir -p "$VERSIONS_DIR"
cp "$SOURCE" "$SNAPSHOT"

echo "Snapshot saved: $SNAPSHOT"
