import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import packageJSON from './package.json';
import typescript from '@rollup/plugin-typescript';

const banner = () => {

  const {
    version,
    name,
    license,
    homepage,
  } = packageJSON;

  const banner = `
  /**
   * Generated on: ${Date.now()} 
   *      Package: ${name}
   *      Version: v${version}
   *      License: ${license}
   *         Docs: ${homepage}
   */

    `;
  return banner;

}

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const formats = ['esm', 'umd'] // 'cjs'

function globals() {
  return {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'classnames': 'classNames',
    'react-popper': 'reactPopper',
    'axios': 'axios',
    'recharts': 'recharts'
  };
}

export default [{
  input: './core/index.tsx',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['react', 'react-dom', 'classnames', 'react-popper', 'axios', 'recharts'],

  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve('./core') },
      ]
    }),
    
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['core/**/*'] }),

    json()
  ],

  output: formats.map(format => ({
    file: `dist/index.${format}.js`,
    format,
    name: `inno-${format}`,
    globals: globals(),
    banner: banner(),
  }))
}, {
  input: './core/index.tsx',

  external: ['react', 'react-dom', 'classnames', 'react-popper', 'axios', 'recharts'],

  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve('./core') },
      ]
    }),
    
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
  ],

  output: {
    dir: 'dist',
    format: 'umd',
    name: `inno`,
    globals: globals(),
    banner: banner(),
  }
}];