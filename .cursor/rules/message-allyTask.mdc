# Accessibility Audit: Message

## Summary
The `Message` component displays informative or alert messages with an icon, title, description, and actions.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - The icon is currently not hidden from screen readers, but it's redundant if the message appearance is already communicated by a role.
    - The container lacks a role to communicate the type of message (e.g., `role="alert"` for alerts, `role="status"` for info).
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - Depending on the `appearance`, the component should have an appropriate role.
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - Ensure that the message's meaning is not conveyed by color alone. The icon and text content should also reflect the message type.
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Ensure all appearance-based colors meet the 4.5:1 contrast ratio.

## Actionable Changes
- [ ] **Aria Role**: Add `role="alert"` for `appearance="alert"` and `role="status"` for other appearances.
- [ ] **Hide Redundant Icon**: Add `aria-hidden="true"` to the icon as it's decorative and the role already communicates the message type.
- [ ] **Contrast Verification**: Audit all appearance colors for contrast compliance.

## WCAG 2.2 AA Success Criteria References
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
