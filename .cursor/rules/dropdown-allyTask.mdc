# Accessibility Audit: Dropdown

## Summary
The `Dropdown` is a complex component (deprecated in favor of Select/Menu/Combobox, but still in use). It manages a list of options, search, and selection. It has significant accessibility challenges common to custom dropdowns, particularly around focus management and ARIA roles.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The component needs to follow the `combobox` or `listbox` pattern correctly.
    - Missing `aria-expanded`, `aria-haspopup`, `aria-controls` on the trigger.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - Complex keyboard navigation (Up/Down arrows, Enter/Space to select) must be fully implemented and robust.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - Selection state of options must be communicated via `aria-selected`.
    - Grouping of options should use `role="group"` and `aria-labelledby`.

## Actionable Changes
- [ ] **Implement ARIA Pattern**: Ensure the trigger has `role="combobox"`, `aria-expanded`, and `aria-controls`.
- [ ] **Listbox Roles**: The list of options should have `role="listbox"` and each option `role="option"`.
- [ ] **Selection State**: Use `aria-selected` on each option.
- [ ] **Focus Management**: Ensure `aria-activedescendant` is used to manage focus within the list while the cursor stays in the search input.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

