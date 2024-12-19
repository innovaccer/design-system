const path = require('path');

const cssTokenFiles = [
  path.resolve(__dirname, '../css/src/variables/index.css'),
  path.resolve(__dirname, '../css/src/tokens/index.css')
];

module.exports = {
  stories: ['../core/components/**/*.story.@(js|jsx|ts|tsx)', '../core/ai-components/**/*.story.@(js|jsx|ts|tsx)'],
  addons: [
    /**
     * Adds following addons
     * Docs
     * Controls
     * Actions
     * Viewport
     * Backgrounds
     * Toolbars & globals
     * https://storybook.js.org/docs/react/essentials/introduction
     */
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    'storybook-css-modules',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: [
              require('autoprefixer'),
              require('postcss-color-mod-function')({
                importFrom: cssTokenFiles,
              }),
            ],
          },
        },
      },
    },
    // {
    //   name: 'storybook-css-modules',
    //   options: {
    //     cssModulesLoaderOptions: {
    //       importLoaders: 1,
    //       // modules: {
    //       //   localIdentName: '[local]', // Use local class names directly
    //       // },
    //     },
    //   },
    // },
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter(prop) {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../core');
    config.resolve.alias['@css'] = path.resolve(__dirname, '../css/src');
    config.resolve.alias['@innovaccer/mds-images/ui-states'] = path.resolve(__dirname, '../mds-images/ui-states');
    // Return the altered config
    return config;
  },
  refs: {
    'rich-text-editor': {
      title: 'Rich Text Editor',
      url: 'https://innovaccer.github.io/mds-rich-text-editor/',
    },
    'mds-helpers': {
      title: 'MDS Helpers',
      url: 'https://innovaccer.github.io/mds-helpers/',
    },
  },
};