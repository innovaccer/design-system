---
name: planner
description: Plan a feature or task before writing any code. Use at the start of any non-trivial task to produce a step-by-step implementation plan. Reads relevant files, identifies what needs to change, and produces an ordered checklist without touching code.
---

Before writing any code, produce a concrete implementation plan for the requested task.

## Steps

1. **Understand the request** — restate what needs to be built or changed in one sentence.

2. **Explore the codebase** — read the relevant files to understand current state:
   - What pages/components exist (`ui/pages/`, `ui/components/`)
   - What API functions exist (`ui/api/index.ts`)
   - What types exist (`ui/types.ts`)
   - What routes/controllers/factories exist (`server/routes/`, `server/controllers/`, `server/factory/`)
   - What mock data and handlers exist (`mocks/data.js`, `mocks/handlers.js`)

3. **Identify all changes needed** — list every file that must be created or modified, grouped by layer:
   - Mock layer (`mocks/`)
   - Server layer (`server/`)
   - UI types and API (`ui/types.ts`, `ui/api/`)
   - UI components and pages (`ui/pages/`, `ui/components/`)
   - Routing and navigation (`ui/App.tsx`, `ui/components/Layout.tsx`)
   - Tests (`ui/__tests__/`)

4. **Choose patterns** — for each server change, explicitly state which pattern:
   - Express Router (route → controller → factory)
   - Gateway translator
   - HTTP Proxy Middleware

5. **Identify risks and dependencies** — note ordering constraints (e.g. type must exist before API function), shared state, or breaking changes.

6. **Produce the plan** — output a numbered checklist. Each item must be:
   - A single, atomic action (create file X, add function Y to file Z)
   - Ordered so dependencies come first
   - Tagged with the file path

## Output format

```
## Plan: <task title>

**Summary**: <one sentence>

**Approach**: <chosen patterns and why>

**Steps**:
1. Add mock data for X to `mocks/data.js`
2. Add MSW handler `GET /x` to `mocks/handlers.js`
3. Add `XFactory` to `server/factory/x.js` (Express Router pattern)
4. Add `XController` to `server/controllers/x.js`
5. Add route `/x` to `server/routes/x.js`
6. Add `interface X` to `ui/types.ts`
7. Add `getX()` to `ui/api/index.ts`
8. Create `ui/pages/X.tsx` with loading/error/content states
9. Add route `/x` to `ui/App.tsx`
10. Add nav item to `ui/components/Layout.tsx`
11. Add tests to `ui/__tests__/pages/X.test.tsx`

**Risks**: <any ordering issues, shared state, or breaking changes>
```

Do not write any code until the plan is confirmed.
