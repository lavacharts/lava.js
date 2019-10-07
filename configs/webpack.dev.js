const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const merge = require("webpack-merge");

const { HtmlWebpackPluginFactory, resolvePath } = require(".");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  output: {
    filename: "lava.js",
    path: resolvePath("public")
  },
  devServer: {
    hot: true,
    // open: true,
    inline: true,
    stats: "errors-only",
    overlay: {
      errors: true,
      warnings: true
    },
    watchContentBase: true,
    contentBase: resolvePath("public")
  },
  plugins: [
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
