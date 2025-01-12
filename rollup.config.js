import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import packageJSON from './package.json';
import replace from '@rollup/plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import gzipPlugin from 'rollup-plugin-gzip';
import { compress } from 'brotli';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import esbuild from 'rollup-plugin-esbuild';
import { concatTokenCSS, 
  // removeUndefinedClasses
 } from './rollupPlugin';
import colorModFunction from 'postcss-color-mod-function';
import autoprefixer from 'autoprefixer';
import removeUndefined from './postcss-remove-undefined';


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
  { find: '@css', replacement: path.resolve('./css/src') },
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

// function removeUndefined() {
//   return {
//     postcssPlugin: 'postcss-remove-undefined',
//     // Once(root) {
//     //   root.walkRules((rule) => {
//     //     rule.selectors = rule.selectors.filter((selector) => !selector.includes('undefined'));
//     //     if (rule.selectors.length === 0) {
//     //       rule.remove();
//     //     }
//     //   });
//     // },

//     Once(root) {
//       root.walkRules((rule) => {
//         rule.walkDecls((decl) => {
//           if (decl.value.includes('undefined')) {
//             decl.remove();
//           }
//         });
//         if (rule.nodes.length === 0) {
//           rule.remove();
//         }
//       });
//     },
//   };
// }


function generateHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  // Convert to base 36 and filter out non-alphanumeric characters
  let hashStr = hash.toString(36).replace(/[^a-z0-9]/gi, '');
  // Ensure the length of the string is at least 5 characters
  while (hashStr.length < 5) {
    hashStr += '0';
  }
  return hashStr.substring(0, 5);
}

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
      generateScopedName: (name, fileName) => {
        if (!name) return 'bg-secondary p-5'; // Return an empty string for undefined classes

        const hash = generateHash(fileName + name);
        const updatedVersion = version.replace(/\./g, '-');
        return `${name}-v${updatedVersion}${hash}`;
      },
    },
    extensions: ['.css', '.scss', '.sass'],
    plugins: [
      colorModFunction({
        importFrom: cssTokenFiles,
      }),
      autoprefixer(),
      removeUndefined(),
    ],
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
    modules: {
      generateScopedName: (name) => {
        if (!name) return 'bg-secondary p-5'; // Return an empty string for undefined classes
        return name; // Use the original class name
      }
    },
    extract: true,
    extensions: ['.css', '.scss', '.sass'],
    plugins: [
      colorModFunction({
        importFrom: cssTokenFiles,
      }),
      autoprefixer(),
      removeUndefined(),
    ],
  }),
  concatTokenCSS(cssSources, cssFiles),
  uglify(),
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

    // Use esbuild for TypeScript/JavaScript files
    esbuild({
      include: /\.[jt]sx?$/, // Include .ts, .tsx, .js, .jsx files
      minify: process.env.NODE_ENV === 'production',
      target: 'es2017', // Specify ECMAScript target
      tsconfig: path.resolve(__dirname, './tsconfig.type.json'),
      loaders: {
        '.json': 'json',
        '.js': 'jsx',
        '.tsx': 'tsx',
        '.ts': 'tsx',
      },
    }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    postcss({
      modules: {
        generateScopedName: (name, fileName) => {
          if (!name) return 'bg-secondary p-5'; // Return an empty string for undefined classes

          const hash = generateHash(fileName + name);
          const updatedVersion = version.replace(/\./g, '-');
          return `${name}-v${updatedVersion}${hash}`;
        },
      },
      extensions: ['.css', '.scss', '.sass'],
      plugins: [
        colorModFunction({
          importFrom: cssTokenFiles,
        }),
        autoprefixer(),
        removeUndefined(),
      ],
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
  plugins: [gzipPlugin(), ...commonJsPlugins],

  output: {
    file: 'dist/gzip/index.js',
    format: 'umd',
    name: `InnovaccerDesignSystem`,
    globals: globals(),
    banner: banner(),
  },
};

export default [jsUmdConfig, jsCjsConfig, jsEsmConfig, brotliConfig, gzipConfig, tsConfig];
