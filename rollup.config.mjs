import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import { fileURLToPath } from 'url';
import packageJSON from './package.json' assert { type: 'json' };
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import gzipPlugin from 'rollup-plugin-gzip';
import { compress } from 'brotli';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import { concatTokenCSS } from './rollupPlugin.mjs';
import colorModFunction from 'postcss-color-mod-function';
import autoprefixer from 'autoprefixer';
import typescript from '@rollup/plugin-typescript';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { version, name, license, homepage } = packageJSON;

const banner = () => {
  const banner = `
  /**
   * Generated on: ${new Date().toISOString()} 
   *      Package: ${name}
   *      Version: v${version}
   *      License: ${license}
   *         Docs: ${homepage}
   */

    `;
  return banner;
};

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const aliasEntries = [
  { find: '@', replacement: path.resolve('./core') },
  { find: '@css', replacement: path.resolve(__dirname, './css/src') }
];

const cssSources = [
  './css/src/tokens',
  './css/src/variables',
  './css/src/core',
  './css/src/utils',
];

const cssFiles = [
  './css/material-design-icons/iconfont/material-icons.css'
]

const cssTokenFiles = [path.resolve(__dirname, './css/src/variables/index.css'), path.resolve(__dirname, './css/src/tokens/index.css')];

function globals() {
  return {
    react: 'React',
    'react-dom': 'ReactDOM',
    classnames: 'classNames',
    'react-popper': 'ReactPopper',
  };
}

const baseConfig = {
  input: './core/index.tsx',
  external: ['react', 'react-dom'],
};

const commonJsPlugins = [
  alias({
    entries: aliasEntries,
  }),

  // Allows node_modules resolution
  resolve({ extensions, preferBuiltins: false }),

  // Allow bundling cjs modules. Rollup doesn't understand cjs
  commonjs(),

  // Compile TypeScript/JavaScript files
  babel({ extensions, include: ['core/**/*'] }),

  image(),

  json(),

  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  postcss({
    modules: {
      generateScopedName: `[name]-[local]-[hash:base64:5]-${version.replace('.', '-')}`,
    },
    extensions: ['.css', '.scss', '.sass'],
    plugins: [
      colorModFunction({
        importFrom: cssTokenFiles,
      }),
      autoprefixer(),
    ],
  }),
  terser(),
];

const umdPlugins = [
  alias({
    entries: aliasEntries,
  }),

  // Allows node_modules resolution
  resolve({ extensions, preferBuiltins: false }),

  // Allow bundling cjs modules. Rollup doesn't understand cjs
  commonjs(),

  // Compile TypeScript/JavaScript files
  babel({ extensions, include: ['core/**/*'] }),

  image(),

  json(),

  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  postcss({
    modules: {
      generateScopedName: (name) => name, // Use the original class name
    },
    extract: true,
    extensions: ['.css', '.scss', '.sass'],
    plugins: [
      colorModFunction({
        importFrom: cssTokenFiles,
      }),
      autoprefixer(),
    ],
  }),
  concatTokenCSS(cssSources, cssFiles),
  terser(),
];

const jsUmdOutputConfig = {
  file: 'dist/index.umd.js',
  format: 'umd',
  name: `InnovaccerDesignSystem`,
  globals: globals(),
  banner: banner(),
};

const jsCjsOutputConfig = {
  file: 'dist/cjs/index.js',
  format: 'cjs',
  name: 'InnovaccerDesignSystem',
  globals: globals(),
  banner: banner(),
};

const jsEsmOutputConfig = {
  file: 'dist/esm/index.js',
  format: 'esm',
  name: 'InnovaccerDesignSystem',
  globals: globals(),
  banner: banner(),
};

const jsUmdConfig = {
  ...baseConfig,
  plugins: umdPlugins,
  output: jsUmdOutputConfig,
};

const jsCjsConfig = {
  ...baseConfig,
  plugins: [...commonJsPlugins, terser()],
  output: jsCjsOutputConfig,
};

const jsEsmConfig = {
  ...baseConfig,
  // react-lottie-player was marked external in esm build to prevent the build from including code that actually required Web APIs like document.getElementsByTagName, etc.
  external: [...baseConfig.external, '@lottiefiles/react-lottie-player'],
  // Slice is used here to remove uglify compression during esm builds
  plugins: commonJsPlugins.slice(0, -1),
  output: jsEsmOutputConfig,
};

const brotliConfig = {
  ...baseConfig,
  plugins: [
    gzipPlugin({
      customCompression: (content) => compress(Buffer.from(content)),
      fileName: '.br',
    }),
    ...commonJsPlugins,
  ],

  output: {
    file: 'dist/brotli/index.js',
    format: 'umd',
    name: `InnovaccerDesignSystem`,
    globals: globals(),
    banner: banner(),
  },
};

const gzipConfig = {
  ...baseConfig,
  plugins: [
    gzipPlugin(),
    ...commonJsPlugins,
  ],

  output: {
    file: 'dist/gzip/index.js',
    format: 'umd',
    name: `InnovaccerDesignSystem`,
    globals: globals(),
    banner: banner(),
  },
};

export default [jsUmdConfig, jsCjsConfig, jsEsmConfig, brotliConfig, gzipConfig];
