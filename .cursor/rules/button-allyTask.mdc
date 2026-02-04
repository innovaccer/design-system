# Accessibility Audit: Button

## Summary
The `Button` component is a standard interactive element. It supports icons, loading states, and various appearances.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - If a button only has an icon (no `children`), it MUST have an `aria-label`. The current implementation uses a `Tooltip` which might not always be sufficient or correctly associated with the button's accessible name.
    - When `loading={true}`, the button is disabled, but it should also communicate the loading state to screen readers, e.g., using `aria-busy="true"`.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure all `ButtonAppearance` and `ButtonStyleType` combinations meet the 4.5:1 contrast ratio.
- **Success Criterion 2.4.7: Focus Visible (Level AA)**:
    - The focus state must be clearly visible.

## Actionable Changes
- [ ] **Aria Label for Icon-only Buttons**: Ensure `aria-label` is used when `children` is absent, even if `tooltip` is provided.
- [ ] **Loading State**: Add `aria-busy="true"` when `loading` is true.
- [ ] **Disabled State**: The `disabled` attribute is correctly used, but consider `aria-disabled="true"` if the button needs to remain focusable while disabled.
- [ ] **Accessible Name for Spinner**: When loading, ensure the spinner or the button has a label like "Loading...".

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
