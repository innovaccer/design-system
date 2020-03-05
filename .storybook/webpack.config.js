const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, '../core')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      }, {
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
    ]
  }
};