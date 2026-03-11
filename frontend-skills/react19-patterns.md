# React 19 Patterns

Review and modernize React code to use React 19 APIs. This project uses React 19.2+ with React Compiler.

## What to Modernize

1. **Context consumption**: `useContext(Ctx)` → `use(Ctx)`
2. **Context providers**: `<Ctx.Provider value={}>` → `<Ctx value={}>`
3. **Data fetching**: `useEffect` + `useState` for loading → `use(promise)` + `<Suspense>`
4. **Form actions**: manual `useState` + `onChange` + `onClick` → `useActionState` + `<form action={}>`
5. **Memoization**: remove `useMemo`/`useCallback` — React Compiler handles it
6. **Ref forwarding**: `forwardRef` → `ref` as regular prop
7. **Style injection**: `document.createElement('style')` → `<style>` in JSX

## Process

1. Search for the old patterns with Grep
2. For each file, apply the appropriate React 19 replacement
3. Hoist static data (schemas, handlers) to module scope
4. Run `npm run build` to verify TypeScript
5. Run `npm test` to verify tests pass

## Rules

- Don't convert if it would break the component's behavior
- `use()` can only be called at the top of a component or inside `if` — not in loops or callbacks
- `useActionState` returns `[state, action, isPending]` — wire `action` to `<form action={}>`
- Promise caches for `use()` should be at module scope (not recreated per render)
