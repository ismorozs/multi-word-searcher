const path = require('path');

module.exports = {

  entry: {
    'background-script': './src/background-script.js',
    'page-script': './src/page-script.js',
  },

  output: {
    path: path.resolve(__dirname, 'extension'),
    filename: '[name].js'
  },

  mode: 'development',
  watch: true,

  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader',
    }]
  },

  stats: {
    colors: true
  },

  devtool: false,

};
