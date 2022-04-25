const path = require('path');

module.exports = {
  "stories": [
    "../core/components/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
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
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    "@storybook/addon-knobs",
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
    // Return the altered config
    return config;
  },
  refs: {
    'rich-text-editor': {
      title: "Rich Text Editor",
      url: "https://innovaccer.github.io/mds-rich-text-editor/"
    },
    'mds-helpers': {
      title: "MDS Helpers",
      url: "https://innovaccer.github.io/mds-helpers/"
    },
    'assessment-components': {
      title: "Assessment-components",
      url: "https://metadata.oninnovaccer.com:3002/"
    }
   }
}