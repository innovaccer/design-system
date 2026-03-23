---
name: a11y
description: Perform WCAG 2.2 AA accessibility audits on UI components and fix violations. Use when auditing a component for accessibility, fixing a11y issues, checking WCAG compliance, or reviewing interactive elements for keyboard/screen reader support.
---

# A11y Audit Skill

Perform a comprehensive WCAG 2.2 AA accessibility audit on the target component or file.

## References

Consult these files during the audit:

- [WCAG 2.2 Full Criteria](references/wcag-as-json.json) — source of truth for all success criteria
- [Audit Methodology](references/wcag-audit-patterns.md) — checklists and remediation patterns
- [Vercel A11y Guidelines](references/vercel-a11y-guidelines.md) — interaction, animation, and design rules
- [Web Interface Guidelines](references/web-interface-a11y-guidelines.md) — component-level rules and anti-patterns

---

## Rules

- Evaluate every WCAG 2.2 AA success criterion for applicability — never skip one.
- Never assume compliance. Flag anything that cannot be verified statically for manual testing.
- Cross-reference related criteria (e.g. 1.4.1 + 1.4.3 + 4.1.2 interact).
- If a component composes sub-components, re-validate inherited risks.
- For measurable checks (contrast ratios, target sizes), write a script in `scripts/`, run it, act on output.

---

## Audit Steps

### 1. Read the Component

Read the component's `.tsx`, CSS module, and `index.tsx`.

### 2. Map the Anatomy

Document: HTML elements, ARIA roles/states/properties, event handlers, interactive states (default/hover/focus/active/disabled/error/loading), color tokens, animations, touch target sizes.

### 3. Evaluate WCAG 2.2 AA Criteria

For each criterion: determine applicability → check full requirement → check exceptions → identify violation or pass.

Key criteria (never skip):

| SC | Topic | Check |
|---|---|---|
| 1.1.1 | Non-text Content | `alt`, `aria-label` on images/icons |
| 1.3.1 | Info and Relationships | Semantic HTML, correct ARIA roles |
| 1.3.3 | Sensory Characteristics | No color/shape-only cues |
| 1.4.1 | Use of Color | Redundant cue beyond color for status/error |
| 1.4.3 | Contrast Minimum | ≥4.5:1 text, ≥3:1 large text |
| 1.4.11 | Non-text Contrast | ≥3:1 UI boundaries and focus rings |
| 1.4.12 | Text Spacing | No content loss with increased spacing |
| 1.4.13 | Content on Hover/Focus | Dismissible, hoverable, persistent |
| 2.1.1 | Keyboard | All functionality keyboard-operable |
| 2.1.2 | No Keyboard Trap | Focus can always move away |
| 2.4.3 | Focus Order | Logical tab order matching visual order |
| 2.4.7 | Focus Visible | Visible `:focus-visible` ring |
| 2.4.11 | Focus Not Obscured (2.2) | Not hidden by sticky headers/overlays |
| 2.5.3 | Label in Name | Visible label included in accessible name |
| 2.5.7 | Dragging Movements (2.2) | Pointer alternative for drag interactions |
| 2.5.8 | Target Size Minimum (2.2) | ≥24×24 px hit target |
| 3.2.1 | On Focus | No unexpected context change on focus |
| 3.3.1 | Error Identification | Errors identified, described, linked to field |
| 3.3.2 | Labels or Instructions | Visible labels, required fields marked |
| 4.1.2 | Name, Role, Value | Correct ARIA on all custom widgets |
| 4.1.3 | Status Messages | `aria-live`/`role="alert"` for dynamic updates |

### 4. Programmatic Validation

**Contrast (SC 1.4.3 / 1.4.11):** Extract token values from `css/src/tokens/index.css`, write `scripts/a11y-contrast-{component}.js`, run it, report actual ratios.

**Touch targets (SC 2.5.8):** Check padding + dimensions in CSS module. Flag interactive elements potentially under 24px.

**ARIA (SC 4.1.2):** Verify role + required states + properties are all present.

### 5. Anti-pattern Check

Flag any of these:

- `outline: none` without `:focus-visible` replacement
- `<div>`/`<span>` with `onClick` instead of `<button>`
- Icon-only interactive element without `aria-label`
- `transition: all` instead of named properties
- Animation without `prefers-reduced-motion` guard
- Color as the sole error/status indicator
- Form input without `<label>` or `aria-label`
- `user-scalable=no` or `maximum-scale=1`
- `onPaste` with `preventDefault`

---

## Report Output Format

```
# A11y Audit: {ComponentName}

**File:** {path}
**Date:** {YYYY-MM-DD}
**Standard:** WCAG 2.2 AA

---

## Summary

| | |
|---|---|
| Compliance Score | X / Y applicable criteria pass |
| Risk Level | Critical / High / Medium / Low |
| Violations | N |
| Warnings | N |
| Passes | N |

---

## Violations

### [SC X.X.X] {Criterion Title}

**Status:** FAIL
**Problem:** {what is wrong and where}
**Why it violates:** {tied to the criterion requirement}
**Location:** `{file}:{line}`

**Fix:**
```tsx
// Before
{existing code}

// After
{corrected code}
```

**Testing:** {how to verify}

---

## Warnings

### [SC X.X.X] {Criterion Title}
**Status:** NEEDS MANUAL VERIFICATION
**Note:** {what to check manually and why static analysis cannot confirm}

---

## Passes

- SC 1.1.1 — alt text present ✓
- SC 2.1.1 — fully keyboard accessible ✓

---

## Cross-Criteria Risks

{Criteria that interact and compound risk}

---

## Required Refactors

1. {Highest priority — blocking}
2. {Next}

---

## Automated Tests to Add

```tsx
// {description}
{test code}
```
```
