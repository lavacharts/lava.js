const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const { resolvePath } = require(".");

function HtmlWebpackPluginFactory(page) {
  return new HtmlWebpackPlugin({
    inject: "head",
    showErrors: true,
    templateParameters: {
      title: "require('../package.json').title"
    },
    alwaysWriteToDisk: true,
    template: resolvePath(`pages/${page}.html`),
    filename: resolvePath(`public/${page.replace(/\.[a-z]+$/, "")}.html`)
  });
}

module.exports = require("./merge")({
  mode: "development",
  devServer: {
    hot: true,
    // open: true,
    inline: true,
    stats: "errors-only",
    contentBase: resolvePath("public")
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolvePath("dist/lava.js"),
        to: resolvePath("public")
      }
    ]),
    ...["index", "events", "options", "formats", "dataquery"].map(
      HtmlWebpackPluginFactory
    ),
    // HtmlWebpackPluginFactory("index.ejs"),
    new HtmlWebpackHarddiskPlugin()
  ]
});
