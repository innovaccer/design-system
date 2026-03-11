# Accessibility Audit

Run a WCAG 2.2 AA accessibility audit on UI components in this project.

## Process

1. **Read** the target component/page file(s)
2. **Check** each MDS component for required accessibility props:
   - Icon-only `<Button>` → needs `aria-label`
   - `<Switch>` → needs `aria-label`
   - `<Input>` / `<Textarea>` → needs `name` + `label` or `aria-label`
   - `<Modal>` → needs `onClose` for escape key
   - Clickable `<Card>` → MDS adds `role="button"` automatically
   - `<img>` → needs `alt`
3. **Check** semantic structure:
   - Heading hierarchy (`<Heading size="l">` → `size="m"` → `size="s">`)
   - No `<div onClick>` without `role="button"` — use `<Button>` instead
   - Forms use `<form>` element with `action` or `onSubmit`
   - Lists of items use semantic grouping
4. **Check** keyboard navigation:
   - All interactive elements reachable via Tab
   - Escape closes modals/dropdowns
   - Enter/Space activates buttons and links
5. **Check** color and contrast:
   - No hardcoded colors — use design tokens
   - Status communicated with text + color (not color alone)
   - `appearance="subtle"` text meets AA contrast on its background
6. **Check** dynamic content:
   - Toast notifications via `useAlertService()` (uses `aria-live`)
   - Loading states use `<Spinner>` (has `role="progressbar"`)
   - Error states render visible text, not just color changes
7. **Run** `lighthouse_audit` via Chrome DevTools MCP if the app is running

## Output Format

```
## filename.tsx

filename.tsx:42 — icon button missing aria-label
filename.tsx:18 — input lacks label
filename.tsx:55 — div with onClick should be Button

## filename2.tsx

✓ pass
```

Group by file. Use `file:line` format. State issue + fix. No preamble.
