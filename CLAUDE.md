# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Repo Is

**Masala Design System (MDS)** — an open-source React + TypeScript component library published as `@innovaccer/design-system`. Components are consumed via named imports; styles ship as a separate CSS bundle (`@innovaccer/design-system/css`).

---

## Environment & Tooling

- **Node ≥ 20.15.0**, **npm ≥ 10.7.0**
- Use `npm` with the committed `package-lock.json`; do not use yarn or pnpm.

---

## Key Commands

| Task | Command |
|---|---|
| Run all tests with coverage | `npm test` |
| Run only changed tests (CI) | `npm run test:ci` |
| Run a single test file | `npx jest path/to/Component.test.tsx` |
| Run a single test by name | `npx jest -t "test name"` |
| Lint TypeScript/JSX | `npm run lint:check` |
| Auto-fix lint issues | `npm run lint` |
| Check CSS formatting | `npm run prettier:check` |
| Auto-fix CSS formatting | `npm run prettier` |
| Type-check | `npm run lint:types` |
| Start Storybook dev server | `npm run dev` (port 5000, also builds CSS watch) |
| Build CSS only | `npm run build-css` |
| Full production build | `npm run build` |

Run `npm run lint:check`, `npm run prettier:check`, `npm run lint:types`, and `npm test` before committing.

---

## Codebase Architecture

### Top-level layout

```
core/                    # All component source (TypeScript/React)
  index.tsx              # Root named exports for all components
  index.type.tsx         # Root named exports for all prop types
  components/
    atoms/               # Primitive UI elements (Button, Input, Badge…)
    molecules/           # Composed components (Modal, Tabs, Tooltip…)
    organisms/           # Complex feature components (Table, DatePicker…)
    patterns/            # Higher-level usage patterns
  accessibility/         # A11y helpers and utilities
  utils/                 # Shared utilities (not covered by tests)

css/
  src/
    tokens/index.css     # Raw design tokens (colors, spacing, radii…)
    variables/index.css  # CSS variable mappings — the only vars to use in components
    components/          # Per-component CSS modules (*.module.css)
  gulpfile.js            # CSS build pipeline (PostCSS → dist)

figma/                   # Figma Code Connect files
docs/                    # Markdown documentation pages
```

### Path alias

`@/*` maps to `core/*` in both TypeScript (`tsconfig.json`) and Jest. Always import with `@/` rather than relative paths across directories.

### Component structure (follow exactly for new components)

```
core/components/{atoms|molecules|organisms}/ComponentName/
  index.tsx              # Re-exports component and nothing else
  ComponentName.tsx      # Implementation
  __tests__/
    ComponentName.test.tsx   # Unit tests + snapshots
  __stories__/
    ComponentName.story.tsx
```

Props interface: `ComponentNameProps extends BaseProps`. Capitalize type aliases (`Appearance`, `Size`, etc.). Export props from `index.type.tsx` at root.

### CSS modules

- CSS files live in `css/src/components/` with the extension `*.module.css`.
- Import and apply class names via the `classnames` (aliased as `cx`) utility.
- Follow **BEM** naming inside CSS modules: `.button__icon--disabled`.
- Use only CSS variables defined in `css/src/variables/index.css` — no hard-coded hex values, pixel sizes, or box-shadow values.

### Build pipeline

- **CSS**: Gulp + PostCSS compiles `css/src/**/*.css` → `css/dist/`.
- **JS**: Rollup produces CJS (`dist/cjs/`), ESM (`dist/esm/`), and UMD (`dist/`) bundles.
- **Types**: Rollup's `tsConfig` build (`rollup.config.js:188-235`) uses `ttypescript` with `tsconfig.type.json` to emit declaration files directly into `dist/`. The shipped entry point is `dist/core/index.type.d.ts` (referenced by `"types"` in `package.json`). `dts.config.js` / `dts-bundle-generator` is a **separate, optional step** that writes a bundled `types/index.d.ts` — it is **not** part of `npm run build` and is not what consumers receive.

### Testing setup

- Jest + React Testing Library (`@testing-library/react`).
- Module alias `@/` → `core/` is configured in `jest.config.js` via `moduleNameMapper`.
- CSS modules are proxied by `identity-obj-proxy` (class names returned as strings).
- SVGs and global CSS are mocked via `__mocks__/`.
- `scripts/setupTest.ts` and `jest-canvas-mock` run before each suite.

---

## Design Tokens (MANDATORY)

- Raw tokens: `css/src/tokens/index.css`
- Mapped CSS variables: `css/src/variables/index.css`
- Use only variables from `variables/index.css` in component styles (e.g., `var(--primary)`, `var(--border-radius-10)`, `var(--shadow-m)`).
- Never hard-code hex values, pixel sizes, or box-shadow rules outside token files.

---

## Accessibility (WCAG 2.2 AA — MANDATORY)

- Use native semantic HTML (`<button>`, `<a>`, `<label>`) before ARIA.
- Icon-only buttons need `aria-label`; decorative icons need `aria-hidden="true"`.
- All form inputs need an associated `<label>` or `aria-label`.
- Modals must trap focus; return focus on close.
- Respect `prefers-reduced-motion` for any animations.
- Never use `outline: none` without a visible `:focus-visible` replacement.
- Detailed audit patterns: `.cursor/rules/wcag-audit-patterns.md`; WCAG data: `a11y-context/wcag-as-json.json`.

---

## Commit Convention

Format: `type(ComponentName): message`
Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
Example: `feat(Button): add loading state prop`

Prefer one focused commit per PR. Do not commit `dist/` or `.lib/` build artifacts.
