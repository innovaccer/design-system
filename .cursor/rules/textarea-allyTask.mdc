# Accessibility Audit: Textarea

## Summary
The `Textarea` component is a standard multi-line text input field. It uses the native `<textarea>` element.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - If `error` is true, the textarea should have `aria-invalid="true"`.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - Ensure the textarea is programmatically associated with a label using `htmlFor` on the `Label` component and `id` on the `Textarea`.
    - If there's help text or an error message, it should be linked via `aria-describedby`.
- **Success Criterion 3.3.2: Labels or Instructions (Level A)**:
    - Ensure every textarea has a visible label.

## Actionable Changes
- [ ] **Aria Invalid**: Add `aria-invalid={error}` to the textarea element.
- [ ] **Aria Describedby**: Link any external `HelpText` or error messages to the textarea.
- [ ] **Accessible Name**: Support `aria-label` or `aria-labelledby` for cases where a visible label is not used.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
