// https://github.com/storybookjs/presets/tree/master/packages/preset-typescript
const path = require('path');

module.exports = [
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
  },
];