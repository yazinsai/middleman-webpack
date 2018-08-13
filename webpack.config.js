const webpack = require('webpack');

module.exports = {
  entry: {
    site: './source/javascripts/site.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/.tmp/dist/javascripts'
  }
};
