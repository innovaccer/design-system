const path = require('path');
const custom = require('./webpack.config.js');

module.exports = {
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../core')],
      },
    }
  ],
  webpackFinal: (config) => {
    return { ...config, resolve: { ...config.resolve, alias: { ...config.resolve.alias,  ...custom.resolve.alias}}}
  }
};