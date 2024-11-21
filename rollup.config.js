import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import packageJSON from './package.json';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import gzipPlugin from 'rollup-plugin-gzip';
import { compress } from 'brotli';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

const banner = () => {
  const { version, name, license, homepage } = packageJSON;

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
  { find: '@css', replacement: path.resolve('./css/src') },
];

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
    modules: true, // Enable CSS Modules
    extensions: ['.css', '.scss', '.sass'],
  }),
  uglify(),
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
    modules: false, // Enable CSS Modules
    autoModules: false,
    // extract: true,
    extensions: ['.css', '.scss', '.sass'],
  }),
  uglify(),
];

const jsUmdOutputConfig = {
  file: 'dist/umd/index.js',
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
  plugins: [...commonJsPlugins, uglify()],
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

const tsConfig = {
  ...baseConfig,
  external: ['react', 'react-dom', 'classnames', 'react-popper'],
  plugins: [
    alias({
      entries: aliasEntries,
    }),

    image(),

    json(),

    // Allows node_modules resolution
    resolve({ extensions }),

    typescript({
      typescript: require('ttypescript'),
      tsconfig: path.resolve(__dirname, './tsconfig.type.json'),
    }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['core/**/*'] }),
    postcss({
      modules: true, // Enable CSS Modules
      extensions: ['.css', '.scss', '.sass'],
    }),
  ],
  output: {
    dir: 'dist',
    format: 'umd',
    name: `inno`,
    globals: globals(),
    banner: banner(),
    sourcemap: true,
  },
};

// const brotliConfig = {
//   ...baseConfig,
//   plugins: [
//     gzipPlugin({
//       customCompression: (content) => compress(Buffer.from(content)),
//       fileName: '.br',
//     }),
//     ...commonJsPlugins,
//   ],

//   output: jsUmdOutputConfig,
// };

// const gzipConfig = {
//   ...baseConfig,
//   plugins: [gzipPlugin(), ...commonJsPlugins],

//   output: jsUmdOutputConfig,
// };

export default [jsUmdConfig, jsCjsConfig, jsEsmConfig, tsConfig];
  // , brotliConfig, gzipConfig];
