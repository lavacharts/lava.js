const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const HardSourcePlugin = require("hard-source-webpack-plugin");

const PKG = require("../package.json");

const PATHS = require("./paths");

module.exports = {
  context: PATHS.root,
  devtool: "source-map",
  plugins: [
    new HardSourcePlugin(),
    new FriendlyErrorsPlugin(),
    new ForkTsCheckerPlugin({ eslint: true })
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: "babel-loader",
        include: [PATHS.src, PATHS.examples],
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
