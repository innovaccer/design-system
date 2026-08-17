# `wb-a` scoped stylesheet

Additional consumer entry built alongside the default `dist/index.css`:

- Output: `css/dist/wb-a.css`
- Import: `@innovaccer/design-system/css/wb-a` or `…/css/dist/wb-a.css`
- Build: `npm run build-css` (gulp) or `npm run build-css-wb-a`

Source composition: `css/scripts/build-wb-a.mjs` concatenates the standard CSS sources, remaps `:root`/`body` → `:scope`, wraps in `@scope (wb-a)`, and appends `src/wb-a/host.css`.

Shared source change: Spinner keyframes renamed to `mds-spin` / `mds-rotate` to avoid colliding with Tailwind’s `spin`.

See `/Users/I1333/Desktop/office/3-pane-repos/demo-css-conflict-app/README.md` for the full isolation demo.
