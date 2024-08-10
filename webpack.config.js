const path = require("path");

const WebpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./index.js",
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: [WebpackNodeExternals()],
};
