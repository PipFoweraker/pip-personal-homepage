# Decision Log

Architectural and design decisions for the project, with reasoning.

---

## 2026-03-20: Review UI code tracked publicly, data stays private

**Context:** The `review/` directory contains both the triage UI code (index.html, serve.js, generate-index.js) and private data (scanned notes, categorization state, file index). The entire directory was gitignored, meaning the code had no version history.

**Options considered:**

1. **Gitignore data only, track code** — The UI code is a generic triage tool that reveals nothing private. Tracking it gives version history and rollback capability. Private material (scans, categories.json, file-index.json) stays gitignored.

2. **Separate private repo** (e.g. a `/coordination/` repo) — Architecturally cleaner separation, but the tools are tightly coupled to this repo's content pipeline. Creates cross-repo coordination overhead (two repos to push, cross-repo paths) for limited benefit with a single maintainer.

3. **Make the whole repo private** — Loses the public visibility of the site code, which matters for professional credibility and the small-web ethos of the project.

**Decision:** Option 1. The code is generic and public-safe. The data is private and gitignored. This is the appropriate level of structure for a single-person project — it avoids both the risk of unversioned code and the overhead of multi-repo coordination.

**What would change this:** If collaborators join, or if the tooling grows complex enough to warrant independent release/reuse, splitting into a separate repo becomes worthwhile. Until then, the gitignore boundary is sufficient.
