import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import packageJSON from './package.json';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { uglify } from "rollup-plugin-uglify";
import gzipPlugin from 'rollup-plugin-gzip'
import { compress } from 'brotli';
import postcss from 'rollup-plugin-postcss';

const banner = () => {
  const {
    version,
    name,
    license,
    homepage,
  } = packageJSON;

  return `
  /**
   * Generated on: ${new Date().toISOString()} 
   *      Package: ${name}
   *      Version: v${version}
   *      License: ${license}
   *         Docs: ${homepage}
   */
  `;
}

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const formats = ['esm', 'umd', 'cjs'];

function globals() {
  return {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'classnames': 'classNames',
    'react-popper': 'ReactPopper',
  };
}

const baseConfig = {
  input: './core/index.tsx',
  external: ['react', 'react-dom'],
};

const commonJsPlugins = [
  alias({
    entries: [{ find: '@', replacement: path.resolve('./core') }],
  }),
  resolve({ extensions, preferBuiltins: false }),
  commonjs(),
  babel({ extensions, include: ['core/**/*'] }),
  json(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  postcss({
    modules: true, // Enable CSS Modules
    extensions: ['.css', '.scss', '.sass'],
  }),
];

const jsUmdOutputConfig = {
  file: 'dist/umd/index.js',
  format: 'umd',
  name: 'InnovaccerDesignSystem',
  globals: globals(),
  banner: banner()
};

const jsCjsOutputConfig = {
  file: 'dist/cjs/index.js',
  format: 'cjs',
  name: 'InnovaccerDesignSystem',
  globals: globals(),
  banner: banner()
};

const jsEsmOutputConfig = {
  file: 'dist/esm/index.js',
  format: 'esm',
  name: 'InnovaccerDesignSystem',
  globals: globals(),
  banner: banner()
};

const jsUmdConfig = {
  ...baseConfig,
  plugins: [...commonJsPlugins, uglify()],
  output: jsUmdOutputConfig
};

const jsCjsConfig = {
  ...baseConfig,
  plugins: [...commonJsPlugins, uglify()],
  output: jsCjsOutputConfig
};

const jsEsmConfig = {
  ...baseConfig,
  plugins: commonJsPlugins,
  output: jsEsmOutputConfig
};

const tsConfig = {
  ...baseConfig,
  external: ['react', 'react-dom', 'classnames', 'react-popper'],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve('./core') }],
    }),
    json(),
    resolve({ extensions }),
    typescript({
      typescript: require('typescript'),
      tsconfig: path.resolve(__dirname, './tsconfig.type.json'),
    }),
    commonjs(),
    babel({ extensions, include: ['core/**/*'] }),
    postcss({
      modules: true, // Enable CSS Modules
      extensions: ['.css', '.scss', '.sass'],
    }),
  ],
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'inno',
    globals: globals(),
    banner: banner(),
    sourcemap: true,
  },
};

const brotliConfig = {
  ...baseConfig,
  plugins: [
    gzipPlugin({
      customCompression: content => compress(Buffer.from(content)),
      fileName: '.br',
    }),
    ...commonJsPlugins
  ],
  output: jsUmdOutputConfig
};

const gzipConfig = {
  ...baseConfig,
  plugins: [
    gzipPlugin(),
    ...commonJsPlugins
  ],
  output: jsUmdOutputConfig
};

export default [jsUmdConfig, jsCjsConfig, jsEsmConfig, tsConfig, brotliConfig, gzipConfig];
