const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const HardSourcePlugin = require("hard-source-webpack-plugin");
const { ProgressPlugin } = require("webpack");

const PKG = require("../package.json");
const PATHS = require("./paths");

module.exports = {
  context: PATHS.root,
  devtool: "source-map",
  plugins: [
    new ProgressPlugin(),
    new HardSourcePlugin(),
    new FriendlyErrorsPlugin(),
    new ForkTsCheckerPlugin({ eslint: true })
  ],
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(j|t)sx?$/,
        loader: "babel-loader",
        include: [PATHS.src],
        exclude: [/node_modules/]
      },
      {
        test: /LavaJs\.ts$/,
        loader: "string-replace-loader",
        options: {
          strict: true,
          search: "__VERSION__",
          replace: PKG.version
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  }
};
