# Accessibility Audit: Chip

## Summary
The `Chip` component is used for actions, selections, or input. It wraps a `GenericChip` which handles the layout, icons, and interactions.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The `Chip` uses `role="button"`. If it's a selection chip, `role="checkbox"` or `role="option"` might be more appropriate depending on the context.
    - The clear button inside the chip also uses `role="button"`, which creates a nested button structure. This is generally discouraged.
    - It lacks `aria-pressed` or `aria-selected` for selection chips.
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - The `onKeyDown` handler only supports `Enter`. It should also support `Space`.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure the chip background and text/icon colors meet contrast requirements, especially for different types and states (selected, disabled).

## Actionable Changes
- [ ] **Role Management**: Adjust `role` based on the `type` prop (e.g., `role="button"` for action, `role="checkbox"` for selection).
- [ ] **Aria Attributes**: Add `aria-pressed` or `aria-checked` for selection chips.
- [ ] **Keyboard Support**: Add `Space` key support in `onKeyDownHandler` and `onChipKeyDownHandler`.
- [ ] **Nested Interactivity**: Improve the structure of the clear button to avoid nested interactive elements if possible, or ensure they are correctly labeled and navigable.
- [ ] **Accessible Name for Clear Button**: Add an `aria-label="Remove"` to the clear button icon.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
