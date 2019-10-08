const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const path = require("path");
const { ProgressPlugin } = require("webpack");

const PKG = require("../package.json");
const { PATHS } = require(".");

module.exports = {
  context: PATHS.root,
  entry: path.join(PATHS.root, "index.ts"),
  output: {
    filename: "lava.js"
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HardSourceWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        include: [PATHS.src],
        exclude: [/node_modules/],
        options: { transpileOnly: true }
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
    extensions: [".tsx", ".ts", ".js"]
  }
};
