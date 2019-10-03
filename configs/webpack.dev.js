const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { merge, commonConfig, resolvePath } = require("./helpers");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    inline: true,
    contentBase: resolvePath("examples")
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: resolvePath("examples/index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: resolvePath("examples"),
        to: resolvePath("build")
      }
    ])
  ]
});
