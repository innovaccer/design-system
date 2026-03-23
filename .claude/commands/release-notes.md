Generate release notes for version $ARGUMENTS and prepend them to CHANGELOG.md.

Follow these steps exactly:

## Step 1 — Find the last released version tag

Run:
```
git tag --sort=-version:refname | head -5
```

Pick the most recent version tag (e.g. `v4.21.0` or `4.21.0` or `v4.21.0-1`). This is `LAST_TAG`.

## Step 2 — Collect commits since `LAST_TAG`

Run:
```
git log <LAST_TAG>..HEAD --pretty=format:"%h %s" --no-merges
```

## Step 3 — Categorize commits

Group each commit by its conventional-commit prefix:

| Prefix | Section |
|---|---|
| `feat(...)` | Features |
| `fix(...)` | Fixes |
| `style(...)`, `refactor(...)`, `perf(...)`, `chore(...)` | Improvements |
| `docs(...)` | Documentation |

Any commit that stands out as a high-level summary can go in **Highlights** (pick the most impactful one or two).

## Step 4 — Format the new section

Use **exactly** this format (match spacing, bullet style, and commit-hash parentheses from the existing entries):

```
## $ARGUMENTS (<TODAY_DATE_YYYY-MM-DD>)

### Highlights

- <one-line summary of the most impactful change(s)>

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- feat(<scope>): <description> (<short-hash>)

### Fixes

- fix(<scope>): <description> (<short-hash>)

### Improvements

- <style|refactor|perf|chore>(<scope>): <description> (<short-hash>)

### Documentation

- docs(<scope>): <description> (<short-hash>)

---

```

- Omit any section that has no commits (except Highlights — always include this with `NA` when empty).
- Highlight is basically a short summary of what is released in the new version.
- Short-hash = first 9 characters of the commit SHA, wrapped in parentheses, e.g. `(abc123def)`.

## Step 5 — Prepend to CHANGELOG.md

Read the current contents of `CHANGELOG.md`, then write back the new section followed by the original content. Do **not** add any extra blank lines between the new section and the old content beyond what the `---` separator already provides.

## Step 6 — Update version in package.json

Read `package.json` and update the `"version"` field to `$ARGUMENTS`. Write the file back preserving all formatting and indentation.
