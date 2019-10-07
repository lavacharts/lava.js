const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolvePath = (...args) => path.resolve(__dirname, "..", ...args);

function HtmlWebpackPluginFactory(pageArr) {
  return pageArr.map(
    page =>
      new HtmlWebpackPlugin({
        inject: "head",
        showErrors: true,
        templateParameters: require("../src/examples/templateParameters"),
        alwaysWriteToDisk: true, // Option provided by html-webpack-harddisk-plugin
        template: resolvePath(`src/examples/${page}.ejs`),
        filename: resolvePath(`public/${page.replace(/\.[a-z]+$/, "")}.html`)
      })
  );
}

module.exports = {
  resolvePath,
  HtmlWebpackPluginFactory
};
