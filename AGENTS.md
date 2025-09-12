# AGENTS

This file defines the working conventions for `design-system`.
Follow these instructions for every pull request.

---

## Environment & Tooling
- **Node/NPM:** Node ≥20.15.0 and npm ≥10.7.0.
- **Dependency manager:** Use `npm` with the committed `package-lock.json`.

---

## Design Tokens (MANDATORY)
Design tokens are the source of truth for colors, spacing, radius, elevation, etc.

- **Token sources:**
  - Raw tokens: `css/src/tokens/index.css`
  - Token mappings & variables: `css/src/variables/index.css`
- **Usage:**
  - Reference tokens through CSS variables (e.g., `var(--primary)`, `var(--border-radius-10)`, `var(--shadow-m)`) & only use tokens defined in `css/src/variables/index.css` files as css variables.
  - Do not hard-code hex values, pixel sizes, or box-shadow rules outside the token files.
  - Add or modify tokens only within the token files.

---

## Code Style & Structure
- **Languages:** TypeScript & React only.
- **File naming:** PascalCase for component files; use `.tsx` for components.
- **Component layout:**
  ````

  core/
    ├── index.tsx                        # Export Components
    ├── index.type.tsx                   # Export Components Props/Types 
    ├── components/{atoms|molecules|organisms}/ComponentName/
          	├── index.tsx                 # Component Main entry file
           ├── {ComponentName}.tsx       # Component Implementation
           ├── __tests__/                # Component Unit Tests
           ├── __stories__/              # Storybook stories
  
  ````
- **Types:** Props interfaces named `[ComponentName]Props` extending `BaseProps`. Capitalize type aliases (e.g., `Appearance`, `Size`).
- **Exports:** Named export of components from `index.tsx`; export props from `index.type.tsx`.
- **Testing:** Jest & React Testing Library is used for unit testing and coverage.
- Snapshots and unit tests are written in [COMPONENT_NAME].test.tsx file inside the __tests__ folder. 

---

## Styling
- CSS Module has been used to define the class names.
- Create a CSS file inside **css** directory with the file extension `module.css` (e.g avatar.module.css)
- Use **ClassNames**, a utility for conditionally joining CSS classNames together.
- Follow the **BEM Convention** & use CSS Modules for naming CSS classes.

___

## Quality Checks (run before committing)
1. `npm run lint:check` – ESLint for TS/JS.
2. `npm run prettier:check` – Prettier for CSS.
3. `npm run lint:types` – TypeScript type check.
4. `npm test` – Jest unit tests (update tests alongside source changes).

---

## Commit & Branch Conventions
- **Conventional Commits:** `type(component): message`
  - Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Keep commits focused; prefer a single commit per PR.
- Branch names should reflect the work (e.g., `feat-button`, `fix-modal-height`).

---

## Documentation & Stories
- Update or add Storybook stories for any visual or API change.
- Update Markdown docs in `docs/` when behavior or usage changes.
- Add/modify Figma files in `figma/` and connect via `figma-code-connect` for new components.

---

## Accessibility
- Ensure components meet WCAG 2.0 AA.
- Verify keyboard navigation, color contrast, and ARIA attributes.
- Resolve any `jsx-a11y` lint warnings.

---

## Review & Misc
- Avoid committing generated artifacts (`dist/`, `.lib/`) or build output.
- Add yourself to contributors via `all-contributors` when appropriate.
- PRs should include a clear description, pass all CI checks, and request review when ready.

---

Adhering to these guidelines keeps the design system consistent, accessible, and maintainable.
