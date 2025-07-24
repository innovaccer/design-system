# Accessibility Audit: Input

## Summary
The `Input` component is a standard text input field. It supports icons, inline labels, clear buttons, and info tooltips.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The `inlineLabel` is rendered as a `<div>` with `Text` but is not programmatically associated with the input. It should be part of the label or use `aria-labelledby`.
    - The `info` tooltip should be associated with the input using `aria-describedby`.
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The clear button and info icon should have appropriate `aria-label`s.
    - If `error` is true, the input should have `aria-invalid="true"`.
- **Success Criterion 3.3.2: Labels or Instructions (Level A)**:
    - Ensure every input has a visible label (handled by the `Label` component, but `Input` should support `aria-label` or `aria-labelledby` if no visible label is present).
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - The clear button is an `Icon` which uses `useAccessibilityProps`, but ensure it's easily reachable and usable via keyboard.

## Actionable Changes
- [ ] **Aria Invalid**: Add `aria-invalid={error}` to the input element.
- [ ] **Aria Describedby**: Link `info` text and any external `HelpText` to the input.
- [ ] **Inline Label Association**: Use `aria-labelledby` to include the `inlineLabel` in the input's accessible name.
- [ ] **Clear Button Label**: Add `aria-label="Clear input"` to the clear button.
- [ ] **Required Attribute**: The `required` prop is correctly passed to the native input.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
