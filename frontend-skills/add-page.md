---
name: add-page
description: Add a full-stack page to this DataShop module. Use when creating a new page, route, view, or end-to-end feature. Covers mock data, MSW handler, server endpoint, TypeScript type, API function, page component, route, and navigation menu item.
---

Add a new full-stack page to this DataShop module following the established pattern. Complete all 8 steps in order:

1. **Mock data** (`mocks/data.js`) — add a named export with realistic seed data matching the expected response shape.

2. **MSW handler** (`mocks/handlers.js`) — add an `http.get/post/put/delete` handler that returns the mock data via `HttpResponse.json(...)`.

3. **Server-side endpoint** — choose the right pattern:
   - **Express Router** (route → controller → factory): for CRUD or BFF aggregation with custom logic
   - **Gateway translator** (`server/gateways/index.js`): for simple proxy passthrough or response reshaping, no controller/factory needed
   - **HTTP Proxy Middleware** (`server/routes/`): for file upload/download or binary streams

4. **TypeScript type** (`ui/types.ts`) — add an `export interface` matching the response shape.

5. **API function** (`ui/api/<sub-app>.ts`) — add a typed function using `api.get<MyType>(...)` or the appropriate HTTP method. Use `ui/api/admin.ts` for admin pages, `ui/api/docs.ts` for docs pages, or `ui/api/index.ts` for shared/home APIs.

6. **Page component** (`ui/pages/<sub-app>/MyPage.tsx`) — place in the appropriate sub-app directory (`home`, `docs`, or `admin`). Fetch via `useEffect` + API call, handle three states:
   - Loading: `<Placeholder>` with `<PlaceholderParagraph>`
   - Error: `<Message appearance="alert" description={error} />`
   - Content: render the data
   - Use `useAuth()` from `../providers` to access the logged-in user and permissions
   - Use `useAlertService()` from `../providers` for toast notifications (e.g. success/error feedback)

7. **Route** (`ui/App.tsx`) — add the route inside the appropriate sub-app route group:
   - Home pages: under `<Route path="/" element={<AppShell />}>` at the index level
   - Docs pages: under `<Route path="docs" element={<DocsLayout />}>`
   - Admin pages: under `<Route path="admin" element={<AdminLayout />}>`

8. **Menu item** — add `{ name: 'my-page', label: 'My Page', icon: 'icon_name', link: '/my-page' }` to the nav menus array in the appropriate layout:
   - Docs pages: `ui/layouts/DocsLayout.tsx`
   - Admin pages: `ui/layouts/AdminLayout.tsx`

### Rules
- Never hardcode data in the UI — all data comes from the backend (or MSW mock).
- Use CSS helper classes for all layout/spacing — never inline `style` for layout.
- Never hardcode colors, font sizes, or pixel values — use design tokens.
- Use `@innovaccer/design-system` components. Query the masala-design-system MCP before writing UI.
- After writing the component, validate with `ds_validate_code`.
