# Accessibility Audit: Pills

## Summary
The `Pills` component is used to display counts or labels with rounded corners. It's rendered as a `<span>` and shares styles with the `Badge` component.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - Like `Badge`, the text color against the background must meet the 4.5:1 contrast ratio for all `appearance` and `subtle` combinations.
- **Success Criterion 1.3.1: Info and Relationships (Level A)**:
    - If a pill is used to show a count (e.g., in a tab), it should be programmatically associated with the relevant element.
- **Success Criterion 1.4.1: Use of Color (Level A)**:
    - Color should not be the only means of conveying information.

## Actionable Changes
- [ ] **Contrast Verification**: Audit all `appearance` and `subtle` combinations for contrast compliance.
- [ ] **Aria Label Support**: Allow passing an `aria-label` to provide context (e.g., "3 unread messages").

## WCAG 2.2 AA Success Criteria References
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
