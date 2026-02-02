# Accessibility Audit: Spinner

## Summary
The `Spinner` component is a visual indicator of a loading state. It's rendered as an SVG.

## WCAG 2.2 AA Violations/Gaps
- **Success Criterion 1.1.1: Non-text Content (Level A)**:
    - The `Spinner` is a non-text content that conveys information (loading). It should have an accessible name like "Loading".
- **Success Criterion 4.1.2: Name, Role, Value (Level A)**:
    - It should have `role="status"` or `role="progressbar"` to communicate its purpose to screen readers.
- **Success Criterion 2.2.2: Pause, Stop, Hide (Level A)**:
    - For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it. While a spinner is usually temporary, it's important to ensure it doesn't distract users.

## Actionable Changes
- [ ] **Aria Role**: Add `role="status"` and `aria-live="polite"` to the SVG or its container.
- [ ] **Accessible Name**: Add a `<title>` element inside the SVG or an `aria-label="Loading"` to the SVG.
- [ ] **Aria Hidden**: If the spinner is used inside a button that already has a "Loading" label, the spinner itself should be `aria-hidden="true"`.

## WCAG 2.2 AA Success Criteria References
- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
