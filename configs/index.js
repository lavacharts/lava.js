const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolvePath = (...args) => path.resolve(__dirname, "..", ...args);

const PATHS = require("./paths");

function HtmlWebpackPluginFactory(pageArr) {
  return pageArr.map(
    page =>
      new HtmlWebpackPlugin({
        inject: "head",
        showErrors: true,
        templateParameters: require("../examples/templateParameters"),
        alwaysWriteToDisk: true, // Option provided by html-webpack-harddisk-plugin
        template: path.join(PATHS.examples, `${page}.ejs`),
        filename: path.join(
          PATHS.public,
          `${page.replace(/\.[a-z]+$/, "")}.html`
        )
      })
  );
}

module.exports = {
  PATHS,
  resolvePath,
  HtmlWebpackPluginFactory
};
