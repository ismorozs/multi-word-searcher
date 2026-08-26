const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "background-script": "./src/background-script.js",
    "page-script": "./src/page-script.js",
  },

  output: {
    path: path.resolve(__dirname, "extension"),
    filename: "[name].js",
  },

  mode: "development",
  watch: true,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },

  stats: {
    colors: true,
  },

  devtool: false,

  resolve: {
 		alias: {
      "@page": path.resolve(__dirname, "src/page"),
      "@background": path.resolve(__dirname, "src/background"),
      "@common": path.resolve(__dirname, "src/common"),
		}
	},

  plugins: [
    new CopyPlugin({
      patterns: [
        createCopyPattern("icons"),
        createCopyPattern("manifest.json"),
      ],
    }),
  ],
};

function createCopyPattern(endPoint) {
  return {
    from: path.resolve(__dirname, "src", endPoint),
    to: path.resolve(__dirname, "extension", endPoint),
    filter: (path) => !path.endsWith(".js"),
  };
}
