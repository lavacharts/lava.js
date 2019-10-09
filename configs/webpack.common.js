const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const HardSourcePlugin = require("hard-source-webpack-plugin");
const { ProgressPlugin } = require("webpack");

const PKG = require("../package.json");
const PATHS = require("./paths");

module.exports = {
  context: PATHS.root,
  plugins: [
    // new CleanPlugin(),
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
