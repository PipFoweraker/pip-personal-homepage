# Copilot Coding Instructions

You are working on issues in this repository. Your PRs will be reviewed by a human and a separate AI reviewer. Optimize for correctness, clarity, and reviewability.

## Core Engineering Principles

### Simplicity First
- Write the simplest solution that solves the problem. Do not add features, abstractions, or "improvements" beyond what the issue requests.
- Three similar lines of code are better than a premature abstraction. Only extract helpers/utilities when there are 3+ genuine call sites.
- Do not add error handling for scenarios that cannot occur. Trust internal code. Only validate at system boundaries (user input, external APIs, file I/O).
- Do not add configuration, feature flags, or backwards-compatibility shims unless the issue specifically asks for them.
- Do not add docstrings, type annotations, or comments to code you did not change.

### Read Before Writing
- Before modifying any file, read and understand the existing code, its patterns, naming conventions, and style. Match them exactly.
- Before assuming the issue's diagnosis is correct, verify it. If the issue says "the bug is in function X," confirm that independently before changing X.
- Check for existing utilities, constants, or patterns that already solve part of the problem. Do not reinvent what exists.

### Comments and Documentation
- Only add comments where the logic is non-obvious. Comments explain *why*, not *what* - the code shows what.
- If you add a comment, it must be accurate enough to survive the next 10 edits to the surrounding code. If it would go stale quickly, do not write it.
- Never write comments like `// removed old implementation` or `// TODO: clean up later`. If code is removed, remove it completely. If something needs follow-up, file an issue.

### Testing
- Every bug fix must include a test that would have caught the bug, unless testing infrastructure does not exist for this project.
- Every new feature must include tests for the primary path and at least one edge case.
- Run existing tests before submitting. Do not submit PRs that break existing tests.
- If you cannot run tests locally, note this explicitly in the PR description.

## Code Standards by Language

### Python
- Follow PEP 8. Use `snake_case` for functions and variables, `PascalCase` for classes.
- Type hints on function signatures (parameters and return types). Not on local variables unless non-obvious.
- Imports: stdlib first, then third-party, then local. Alphabetized within groups.
- Use f-strings over `.format()` or `%`. Use `pathlib.Path` over `os.path` for new code.
- If the project uses `ruff` or `black`, your code must pass them without changes.

### GDScript (Godot)
- Follow the Godot style guide. `snake_case` for functions/variables, `PascalCase` for classes/nodes.
- Type hints on all function parameters and return types.
- Use `@onready` and `@export` annotations. Signal connections via code, not editor, unless the project does otherwise.
- Organize: `@export` vars → signals → `@onready` vars → private vars → `_ready()` → `_process()` → public methods → private methods.

### JavaScript / TypeScript
- Match the formatting of existing code in the file. If the project has prettier/eslint configs, follow them.
- Prefer `const` over `let`. Never use `var`.
- Use async/await over raw promises where possible.
- TypeScript: explicit return types on exported functions. Avoid `any` - use `unknown` and narrow.

### HTML / CSS
- Semantic HTML elements. No div soup.
- Class naming: match whatever convention exists in the project (BEM, utility-first, etc.).
- Accessibility: all images need alt text, form inputs need labels, interactive elements need focus styles.

### JSON / Data Files
- Validate against existing schemas if present.
- Preserve existing formatting (indentation level, key ordering).
- ASCII-only content in data pipeline files unless the project explicitly uses Unicode.

## Git and PR Standards

### Commits
Use Conventional Commits format:
```
<type>: <short description>

<optional body explaining why, not what>
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `style`, `perf`, `ci`, `build`

- Subject line: imperative mood, lowercase, no period, under 72 characters.
- Body: explain *why* the change was made, not *what* changed (the diff shows what).
- One logical change per commit. If a fix requires a refactor, that is two commits.

### Branch Naming
- `feature/<short-description>` for new features
- `fix/<issue-number>-<short-description>` for bug fixes

### Pull Request Description
Use this format:
```markdown
## Summary
[1-3 sentences: what this PR does and why]

## Changes
- [Bulleted list of specific changes, one per bullet]

## Testing
make sure some of the unit tests are property based
write the unit tests before you write the code
let me see some of them fail 
- [How you tested this, what you verified]
- [Edge cases considered]

## Notes for Reviewer
- [Anything non-obvious about the approach]
- [Trade-offs made and why]
- [Areas where you are least confident]
```

Rules for PR descriptions:
- State facts, not feelings. Not "Great improvement to the system" but "Reduces memory usage by ~30% in the event processing loop."
- If you made a design choice, explain what alternatives you considered and why you chose this one.
- If you are uncertain about something, say so explicitly. "I am not confident that X handles the case where Y" is more useful than silence.
- Do not pad with filler. If there is nothing notable for reviewers, omit that section.

### What PRs Must Not Do
- Do not change files unrelated to the issue.
- Do not "fix" formatting, linting, or style in files you did not otherwise modify.
- Do not update dependencies unless the issue requires it.
- Do not modify CI/CD pipelines, deployment configs, or infrastructure files unless the issue specifically targets them.

## Anti-Patterns to Avoid

**Over-engineering**: Adding generalization, extensibility points, plugin architectures, or strategy patterns for single-use code.

**Shotgun fixes**: Changing multiple things hoping one of them fixes the bug. Identify the root cause first, change only what addresses it.

**Copy-paste with modifications**: If you are copying a block of code and tweaking it, consider whether the original should be generalized. But also consider whether the duplication is actually fine (see simplicity principles above).

**Swallowing errors**: Do not catch exceptions just to log and continue unless the recovery path is genuinely correct. An unhandled crash with a stack trace is more useful than a silent malfunction.

**Magic values**: No unexplained numeric constants or string literals in logic. Use named constants or explain inline why the value is what it is.

**Assuming the happy path**: If you write code that calls an external service, reads a file, or parses user input, handle the failure case. But for internal function calls between trusted code, trust the contract.

## Review Readiness Checklist

Before marking a PR as ready:
- [ ] All existing tests pass
- [ ] New tests added for new/changed behavior
- [ ] No unrelated changes in the diff
- [ ] Commit messages follow conventional format
- [ ] PR description follows the template above
- [ ] No secrets, credentials, or environment-specific paths in the code
- [ ] No `console.log`, `print()` debugging statements left in
- [ ] Code matches the style of surrounding code in every file touched
