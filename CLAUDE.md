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

## Design System Components (MANDATORY)
Always use existing design system components before creating new ones or using native HTML elements.

- **Component library:** `core/components/`
- **Available atoms:** Avatar, AvatarGroup, Badge, Breadcrumbs, Button, Caption, Card, Checkbox, Chip, ChipGroup, Divider, Dropdown, Flex, Heading, HelpText, Icon, Input, Label, Legend, Link, LinkButton, Message, Meter, Paragraph, Pills, ProgressBar, ProgressRing, Radio, Row, Column, SegmentedControl, Slider, Spinner, StatusHint, Subheading, SwitchInput, Text, Textarea, Toast, and more.
- **Available molecules:** Chat, ChatMessage, ChipInput, Dialog, Dropzone, EditableChipInput, EditableDropdown, EditableInput, EmptyState, FileList, FileUploader, FullscreenModal, InputMask, KeyValuePair, Modal, Pagination, Placeholder, Popover, Sidesheet, Stepper, Tabs, Tooltip, VerificationCodeInput, and more.
- **Available organisms:** Calendar, ChoiceList, Combobox, DatePicker, DateRangePicker, Grid, HorizontalNav, InlineMessage, List, Listbox, Menu, Navigation, PageHeader, Select, Table, TextField, TimePicker, VerticalNav, and more.
- **Rules:**
  - Import from the component's `index.tsx` (e.g., `import { Button } from '@/core/components/atoms/button'`).
  - Extend existing components via props rather than wrapping with custom HTML.
  - Do not replicate functionality already covered by an existing component.
  - When a component doesn't exist yet, follow the component layout structure below and build it from atomic components upward.

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

---

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

## Accessibility (WCAG 2.2 AA — MANDATORY)
All components must meet WCAG 2.2 AA. Treat WCAG as a hard requirement, not a guideline.

### A11y References
- Audit process: `.cursor/rules/wcag-a11y-audit-report.mdc`
- Audit patterns: `.cursor/rules/wcag-audit-patterns.md`
- Guidelines: `.cursor/rules/vercel-a11y-guidelines.mdc`, `.cursor/rules/web-interface-a11y-guidelines.mdc`
- WCAG source data: `a11y-context/wcag-as-json.json`

### Semantic HTML & ARIA
- MUST: Use native semantics (`<button>`, `<a>`, `<label>`, `<table>`) before ARIA.
- MUST: `<button>` for actions; `<a>`/`<Link>` for navigation — never `<div onClick>`.
- MUST: Icon-only buttons must have a descriptive `aria-label`.
- MUST: Decorative icons/images must have `aria-hidden="true"` / `alt=""`.
- MUST: All images need `alt` text (empty string if purely decorative).
- MUST: Custom widgets must have correct ARIA roles, states, and properties (`aria-expanded`, `aria-checked`, `aria-selected`, etc.).
- MUST: Form inputs need `<label>` (via `htmlFor`) or `aria-label`/`aria-labelledby`.
- MUST: Status/error messages use `role="alert"` or `aria-live="polite"` as appropriate.
- MUST: No duplicate `id` attributes in the DOM.

### Keyboard Navigation
- MUST: All interactive elements are fully keyboard accessible.
- MUST: Keyboard interactions follow [WAI-ARIA APG patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).
- MUST: No keyboard traps (unless intentional modal trapping per APG).
- MUST: Focus is managed correctly — trap in modals, return focus on close.
- MUST: Tab order is logical and matches visual order.

### Focus Visibility
- MUST: Visible focus ring on all interactive elements using `:focus-visible`.
- NEVER: `outline: none` / `outline-none` without a visible focus replacement.
- MUST: Focus indicators meet 3:1 contrast ratio against adjacent colors.
- MUST: Focused elements are not obscured by sticky headers or overlays (WCAG 2.4.11).

### Color & Contrast
- MUST: Text contrast ≥ 4.5:1 (normal); ≥ 3:1 (large text ≥18pt or 14pt bold).
- MUST: UI component boundaries and icons ≥ 3:1 contrast ratio.
- MUST: Color is never the only means of conveying information (use icons, text, or patterns as redundant cues).
- MUST: Error states use more than color alone.

### Touch & Target Size
- MUST: Interactive hit targets ≥ 24×24 px (mobile ≥ 44×44 px); expand hit area with padding if visual size is smaller.
- MUST: `touch-action: manipulation` to prevent double-tap zoom delay.
- MUST: No dead zones on checkboxes/radios — label and control share one hit target.

### Motion & Animation
- MUST: Honor `prefers-reduced-motion` — provide reduced variant or disable animation entirely.
- MUST: Animate only compositor-friendly properties (`transform`, `opacity`).
- NEVER: `transition: all` — list properties explicitly.
- MUST: Animations are interruptible and respond to user input.

### Content Handling
- MUST: Text containers handle long content (`truncate`, `line-clamp`, `break-words`).
- MUST: Flex children need `min-w-0` to allow text truncation.
- MUST: Handle empty states — no broken UI for empty strings or arrays.
- MUST: Locale-aware dates/times/numbers (`Intl.DateTimeFormat`, `Intl.NumberFormat`).

### Per-Component Audit (when building or modifying components)
For each component, validate:
1. HTML structure and heading hierarchy.
2. ARIA roles, states, and properties.
3. Keyboard interactions and event handlers.
4. Color contrast of all visual states (default, hover, focus, active, disabled, error).
5. Touch target sizes.
6. Focus handling (visibility, order, trap/return).
7. Screen reader announcements for dynamic content.
8. `prefers-reduced-motion` support for any animations.

### Anti-patterns (always flag and fix)
- `user-scalable=no` or `maximum-scale=1` disabling zoom.
- `onPaste` with `preventDefault` blocking paste.
- `outline: none` without focus-visible replacement.
- `<div>` or `<span>` with click handlers instead of `<button>`.
- Icon buttons without `aria-label`.
- Images without `alt` attribute.
- Form inputs without associated labels.
- Hardcoded color values outside token files (contrast cannot be verified programmatically).

### Resolving Lint Warnings
- Resolve all `jsx-a11y` ESLint warnings before committing.
- Run `npm run lint:check` and fix every a11y violation reported.

---

## Review & Misc
- Avoid committing generated artifacts (`dist/`, `.lib/`) or build output.
- Add yourself to contributors via `all-contributors` when appropriate.
- PRs should include a clear description, pass all CI checks, and request review when ready.

---

Adhering to these guidelines keeps the design system consistent, accessible, and maintainable.
