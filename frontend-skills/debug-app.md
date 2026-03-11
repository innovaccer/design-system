---
name: debug-app
description: Debug this DataShop module using Chrome DevTools MCP. Use when investigating visual regressions, API errors, console errors, performance issues, or unexpected UI behavior in the running app.
---

Debug the running DataShop app using the Chrome DevTools MCP. Work through these steps systematically:

## Step 1: Capture current state
```
take_screenshot          → see what the app currently looks like
list_pages               → find the correct tab/page
select_page(id)          → switch to the right tab if needed
navigate_page(url)       → navigate to the page under investigation
```

## Step 2: Check for errors
```
list_console_messages    → look for JS errors, warnings, failed imports
get_console_message(id)  → inspect a specific message in detail
```

## Step 3: Inspect network/API calls
```
list_network_requests    → see all requests made by the page
get_network_request(id)  → inspect request URL, status, headers, request/response body
```

Use this to confirm:
- The right endpoint is being called
- The request has the correct token/params
- The response shape matches what the UI expects
- MSW is intercepting (or not, for proxy routes)

## Step 4: Interact and inspect
```
click(selector)             → trigger user actions
fill(selector, value)       → fill form inputs
hover(selector)             → trigger hover states
evaluate_script(js)         → run diagnostic JS in the browser console
take_snapshot               → capture DOM snapshot for structural inspection
```

## Step 5: Performance/accessibility audit
```
lighthouse_audit            → run Lighthouse for performance, accessibility, best practices
```

## Common debugging patterns

**Component not rendering data:**
1. `list_network_requests` — confirm the API call was made and returned 200
2. `get_network_request(id)` — check the response body shape
3. `list_console_messages` — look for type errors or undefined property access
4. `evaluate_script('document.querySelector("selector")')` — confirm DOM structure

**API call failing:**
1. `get_network_request(id)` — check status code and response body
2. Verify MSW handler matches the request URL (`baseUrl + path`)
3. For proxy routes, check `target` is resolved from `services`

**Layout/spacing issue:**
1. `take_screenshot` — capture the visual state
2. `evaluate_script('getComputedStyle(el)')` — inspect computed styles
3. Check that CSS helper classes are used (not inline styles)

**White screen / crash:**
1. `list_console_messages` — look for uncaught errors
2. Check ErrorBoundary is wrapping the route in `App.tsx`
3. Check `ui/__tests__/` for a failing test that reveals the cause
