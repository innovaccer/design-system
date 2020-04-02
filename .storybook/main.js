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
          propFilter(prop) {
            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules');
            }
            return true;
          },
          // shouldExtractLiteralValuesFromEnum: true
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, '../core')],
      },
    },
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true
      }
    }
  ],
  webpackFinal: (config) => {
    const rules = config.module.rules;
    const customRules = [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      },
       {
        test: /\.woff($|\?)/,
        loader: 'file-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]'
      }, {
        test: /\.woff2($|\?)/,
        loader: 'file-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]'
      }, {
        test: /\.[ot]tf($|\?)/,
        loader: 'file-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]'
      }, {
        test: /\.eot($|\?)/,
        loader: 'file-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]'
      } 
    ];
    
    const newRules = rules.concat(customRules);

    return { ...config, module: { ...config.module, rules: newRules}, resolve: { ...config.resolve, alias: { ...config.resolve.alias,  ...custom.resolve.alias}}}
  }
};