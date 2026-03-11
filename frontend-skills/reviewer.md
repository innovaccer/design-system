---
name: reviewer
description: Review code changes in this DataShop module for correctness, design system compliance, architecture, and test coverage. Use after implementing a feature, before committing, or when asked to review a file or diff.
---

Review the specified code (file, diff, or recent changes) against this project's standards. Produce a structured report with findings and required fixes.

## What to review

If no target is specified, review all files changed since the last commit (`git diff HEAD`).

## Review checklist

### 1. Design system compliance
- [ ] No inline `style` props for layout, spacing, alignment, or sizing — use CSS helper classes
- [ ] No hardcoded colors, font sizes, or pixel values — use design tokens (`var(--token)`)
- [ ] No custom CSS when a helper class exists
- [ ] All components imported from `@innovaccer/design-system`
- [ ] No raw `<div>`/`<span>`/`<p>` where an MDS component exists
- [ ] Run `ds_validate_code(code)` on each changed UI file

### 2. Data sourcing
- [ ] No hardcoded data in UI components — all data from API calls
- [ ] Every new page has: mock data, MSW handler, server endpoint, type, API function
- [ ] Pages handle all three states: loading, error, content

### 3. Providers usage
- [ ] Pages use `useAuth()`/`useAlertService()` from `ui/providers` instead of accessing `window.datashop.app.module()` directly
- [ ] No direct reads from `datashop.app.module()` in UI components — use the provider hooks

### 4. TypeScript
- [ ] No `@ts-expect-error` suppressions — fix errors properly
- [ ] Types in `ui/types.ts` match actual API response shapes
- [ ] `ui/env.d.ts` used for component prop types where needed

### 5. Server-side patterns
- [ ] Correct pattern chosen for the use case (Router vs Gateway vs Proxy)
- [ ] Factory: only data access via `datastore.service()`, no business logic
- [ ] Controller: only extracts req fields, calls factory, sends response
- [ ] Route: only wires HTTP methods to controllers, mounts on app
- [ ] HTTP Proxy routes have MSW fallback for mock environment

### 6. Tests
- [ ] New pages and components have corresponding test files in `ui/__tests__/`
- [ ] Tests query by visible text, role, or label — not CSS class or test ID
- [ ] Router-dependent components wrapped in `<MemoryRouter>`
- [ ] API calls mocked with `vi.spyOn` — no real HTTP in tests
- [ ] `npm test` passes

### 7. General code quality
- [ ] No unused imports, variables, or dead code
- [ ] No `console.log` left in committed code
- [ ] Error messages are user-friendly, not raw exception messages
- [ ] `npm run build` passes (no TypeScript errors)
- [ ] `npm run lint` passes

## Output format

```
## Review: <file or feature name>

### Passed
- <list of checks that passed>

### Issues (must fix)
- **[STYLE]** `MyPage.tsx:12` — inline style for margin, use `mt-4` instead
- **[DATA]** `MyPage.tsx` — hardcoded items array, fetch from API
- **[TYPE]** `types.ts` — `status` typed as `string`, should be `'active' | 'inactive'`
- **[TEST]** `MyPage.test.tsx` missing — add loading, error, and content state tests

### Suggestions (optional)
- <non-blocking improvements>

### Verdict
APPROVED / NEEDS CHANGES
```

Fix all "must fix" issues before considering the implementation complete.
