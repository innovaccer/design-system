---
name: orchestrator
description: Orchestrate a multi-step feature implementation end-to-end. Use for complex tasks that span multiple layers (mock, server, UI, tests). Runs planner first, then executes each step using the appropriate skill, validates after each layer, and ensures nothing is missed.
---

Orchestrate the full implementation of the requested feature end-to-end across all layers.

## Phase 1: Plan
Run `/planner` to produce the implementation checklist. Do not proceed until the plan is clear and covers all layers.

## Phase 2: Execute by layer

Work through the plan in this order — complete and verify each layer before moving to the next.

### Layer 1: Mock (foundation)
- Add mock data to `mocks/data.js`
- Add MSW handler(s) to `mocks/handlers.js`
- Verify: handler URL matches the pattern the server will expose

### Layer 2: Server
Use `/add-endpoint` for guidance on pattern selection.
- Create factory, controller, and route (Express Router), OR
- Add gateway translator (Gateway), OR
- Add proxy middleware route (HTTP Proxy)
- Verify: route path matches MSW handler URL; factory uses correct service methods

### Layer 3: UI types and API
- Add TypeScript interface to `ui/types.ts`
- Add typed API function to `ui/api/index.ts`
- Verify: type matches mock data shape; API URL matches server route

### Layer 4: UI component
Use `/build-ui` for component/pattern lookup.
- Create page component with loading → error → content states
- Add route to `ui/App.tsx`
- Add nav item to `ui/components/Layout.tsx` (if needed)
- Run `ds_validate_code` on the component
- Verify: no inline styles for layout; no hardcoded colors or px values

### Layer 5: Tests
Use `/write-tests` for test patterns.
- Add unit tests for the new component/page
- Cover: loading state, error state, successful render
- Run `npm test` — all tests must pass

## Phase 3: Verify end-to-end

1. Run `npm run build` — no TypeScript errors
2. Run `npm test` — all tests pass
3. Run `npm run lint` — no lint errors
4. Use `/debug-app` to visually verify the feature in the running app

## Phase 4: Summarize

Report what was built:
- Files created/modified
- Endpoint(s) added
- Any deviations from the original plan and why
