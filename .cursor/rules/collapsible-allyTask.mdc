# Accessibility Audit: Collapsible

## Summary
The `Collapsible` component allows content to be expanded or collapsed. It supports hover-based expansion and a manual trigger.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - The trigger should have `aria-expanded` and `aria-controls` to communicate its state and the element it controls.
    - The trigger lacks an accessible name (it only contains an icon).
- **Success Criterion 2.1.1: Keyboard (Level A)**:
    - While the trigger has `onKeyDown`, it should specifically handle `Enter` and `Space` keys.
    - Hover-based expansion (`hoverable`) can be problematic for keyboard users if there's no way to trigger it via keyboard.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The relationship between the trigger and the collapsible content should be programmatically defined.

## Actionable Changes
- [ ] **Aria Attributes**: Add `aria-expanded={expanded}` and `aria-controls={contentId}` to the trigger.
- [ ] **Accessible Name**: Add `aria-label` to the trigger (e.g., "Expand" or "Collapse").
- [ ] **Keyboard Support**: Update `onKeyDown` to specifically check for `Enter` and `Space`.
- [ ] **Hover Accessibility**: Ensure that if `hoverable` is true, the component is still fully usable for keyboard and screen reader users.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
