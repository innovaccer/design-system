/**
 * Single source of truth for the CSS build order.
 *
 * Consumed by both `css/gulpfile.js` (default `dist/index.css`) and
 * `css/scripts/build-scoped.mjs` (scoped `dist/mds-scoped.css`) so the two
 * bundles cannot drift apart when a new source directory is added.
 *
 * Paths are globs relative to the `css/` directory.
 */

const materialIcons = './material-design-icons/iconfont/material-icons.css';
const materialFont = './material-design-icons/iconfont/*.{ttf,otf,woff2}';

/**
 * Typography is listed explicitly ahead of `components/*` so that, on equal
 * specificity, component rules win over the base typography rules. These files
 * also match the `components/*` glob below; the duplicate is de-duplicated by
 * path (glob-stream in gulp, an explicit Set in the scoped build), keeping the
 * earlier position.
 */
const typographyCssPath = [
  './src/components/text.module.css',
  './src/components/heading.module.css',
  './src/components/label.module.css',
  './src/components/caption.module.css',
  './src/components/subheading.module.css',
];

/**
 * Cascade order, shared by every bundle. The scoped bundle deliberately uses the
 * same list with nothing appended — it is the same CSS, only wrapped in `@scope`.
 */
const sources = [
  './src/tokens/*.css',
  './src/variables/*.css',
  materialIcons,
  './src/core/*.css',
  ...typographyCssPath,
  './src/components/*.css',
  './src/ai-components/*.css',
  './src/utils/*.css',
];

module.exports = {
  materialIcons,
  materialFont,
  typographyCssPath,
  sources,
};
