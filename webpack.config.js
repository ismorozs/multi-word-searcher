const path = require('path');

module.exports = {

  entry: {
    popup: './src/popup.js',
    'background-script': './src/background-script.js',
    'page-script': './src/page-script.js',
  },

  output: {
    path: path.resolve(__dirname, 'extension'),
    filename: (chunkData) => {
      switch (chunkData.chunk.name) {
        case 'popup':
          return `./popup/popup.js`;

        default:
          return `./${chunkData.chunk.name}.js`;
      }
    }
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

  devtool: 'inline-source-map'

};
