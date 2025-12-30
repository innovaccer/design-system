import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import colorModFunction from 'postcss-color-mod-function';
import autoprefixer from 'autoprefixer';
import path from 'path';
import packageJSON from './package.json';
import { concatTokenCSS } from './rollupPlugin';

/**
 * Dedicated Rollup config for ESM CSS extraction
 * This builds CSS from source files with the same scoping as the ESM build
 * Produces: dist/esm/index.css (extracted, not bundled in JS)
 * 
 * This is a minimal config that only processes CSS - no JS bundling needed
 */

const { version } = packageJSON;

const aliasEntries = [
  { find: '@', replacement: path.resolve('./core') },
  { find: '@css', replacement: path.resolve(__dirname, './css/src') },
];

const cssSources = [
  './css/src/tokens',
  './css/src/variables',
  './css/src/core',
  './css/src/utils',
];

const cssFiles = ['./css/material-design-icons/iconfont/material-icons.css'];

const cssTokenFiles = [
  path.resolve(__dirname, './css/src/variables/index.css'),
  path.resolve(__dirname, './css/src/tokens/index.css'),
];

// Minimal plugins - only what's needed for CSS extraction
const esmCssPlugins = [
  alias({
    entries: aliasEntries,
  }),

  resolve({
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
  }),

  json(),

  image(),

  // Use esbuild to handle TypeScript/JSX (faster than babel)
  esbuild({
    include: /\.[jt]sx?$/,
    exclude: /node_modules/,
    sourceMap: false,
    target: 'esnext',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    loaders: {
      '.js': 'jsx',
      '.jsx': 'jsx',
      '.ts': 'tsx',
      '.tsx': 'tsx',
    },
  }),

  // PostCSS with CSS extraction enabled
  postcss({
    modules: {
      // Same scoping pattern as ESM build - ensures class names match
      generateScopedName: `[name]-[local]-[hash:base64:5]-${version.replace(/\./g, '-')}`,
    },
    extract: path.resolve(__dirname, './dist/esm/index.css'), // Extract to separate file
    extensions: ['.css', '.scss', '.sass'],
    plugins: [
      colorModFunction({
        importFrom: cssTokenFiles,
      }),
      autoprefixer(),
    ],
  }),

  // Concatenate token CSS (variables, tokens, material icons)
  concatTokenCSS(cssSources, cssFiles),
];

// Minimal build config just for CSS extraction
const esmCssConfig = {
  input: './core/index.tsx',
  // Mark node_modules and React as external
  external: (id) => {
    // External: node_modules, react, react-dom
    if (id.includes('node_modules')) return true;
    if (['react', 'react-dom', '@lottiefiles/react-lottie-player'].includes(id)) return true;
    // Process everything else (our source files including CSS)
    return false;
  },
  plugins: esmCssPlugins,
  output: {
    file: 'dist/esm/.temp-css-build.js', // We only care about the CSS, not the JS
    format: 'esm',
  },
  onwarn(warning, warn) {
    // Suppress certain warnings since we're only extracting CSS
    if (warning.code === 'EMPTY_BUNDLE') return;
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
};

export default esmCssConfig;

