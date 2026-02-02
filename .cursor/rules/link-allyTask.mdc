# Accessibility Audit: Link

## Summary
The `Link` component renders an `<a>` element. It supports different sizes, appearances, and a disabled state.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - When `disabled={true}`, the link has `tabIndex={-1}`, but it should also have `aria-disabled="true"`. Note that native `<a>` elements don't support the `disabled` attribute, so `aria-disabled` is essential.
- **Success Criterion 2.4.4: Link Purpose (In Context) (Level A)**:
    - If the link opens in a new window (`target="_blank"`), this should be communicated to screen readers, e.g., "opens in a new window".
- **Success Criterion 1.4.3: Contrast (Minimum) (Level AA)**:
    - The `subtle` appearance must meet the 4.5:1 contrast ratio.
- **Success Criterion 2.4.7: Focus Visible (Level AA)**:
    - Ensure the focus state is clearly visible.

## Actionable Changes
- [ ] **Aria Disabled**: Add `aria-disabled={disabled}` to the link element.
- [ ] **New Window Warning**: If `target="_blank"`, add an `aria-label` or a hidden text that indicates the link opens in a new window. Also, ensure `rel="noopener noreferrer"` is added for security and performance.
- [ ] **Contrast Verification**: Audit the `subtle` appearance contrast.

## WCAG 2.2 AA Success Criteria References
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
