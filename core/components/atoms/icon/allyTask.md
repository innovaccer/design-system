# Accessibility Audit: Icon

## Summary
The `Icon` component renders a material icon using an `<i>` element. It uses a custom hook `useAccessibilityProps` to handle basic accessibility like `role`, `tabIndex`, and keyboard interactions if `onClick` is provided.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.1.1: Non-text Content (Level A)**:
    - Icons are often decorative. If an icon doesn't have an `onClick` or a specific meaning, it should have `aria-hidden="true"`.
    - If an icon is functional (e.g., used as a button), it MUST have an `aria-label`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `useAccessibilityProps` defaults `role` to `button` if `onClick` is present. This is good, but ensure the `aria-label` is also provided.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure all `IconAppearance` colors meet the 4.5:1 contrast ratio against their likely backgrounds.

## Actionable Changes
- [ ] **Aria Hidden by Default**: If no `onClick` or `aria-label` is provided, default to `aria-hidden="true"`.
- [ ] **Mandatory Label for Functional Icons**: Encourage or enforce `aria-label` when `onClick` is provided.
- [ ] **Contrast Audit**: Verify contrast for all icon appearances.

## WCAG 2.2 AA Success Criteria References
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
