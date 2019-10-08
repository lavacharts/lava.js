const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const merge = require("webpack-merge");

const { PATHS, HtmlWebpackPluginFactory } = require(".");

console.log("PATHS.public", PATHS.public);

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  watch: true,
  output: { path: PATHS.public },
  devServer: {
    // hot: true,
    // open: true,
    inline: true,
    stats: "errors-only",
    overlay: {
      errors: true,
      warnings: true
    },
    watchContentBase: true,
    contentBase: PATHS.public
  },
  plugins: [
    new CopyPlugin([
      {
        context: PATHS.examples,
        from: "*.js",
        flatten: true,
        to: PATHS.public,
        ignore: ["templateParameters.js"]
      }
    ]),
    ...HtmlWebpackPluginFactory([
      "index",
      "events",
      "options",
      "formats",
      "dataquery"
    ]),
    new HtmlWebpackHarddiskPlugin()
  ]
});
