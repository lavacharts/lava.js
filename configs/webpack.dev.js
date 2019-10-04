// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolvePath } = require(".");

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
    // new HtmlWebpackPlugin({
    //   inject: "head",
    //   template: resolvePath("public/index.html")
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: resolvePath("public"),
    //     to: resolvePath("build")
    //   }
    // ]),
    // new CopyWebpackPlugin([
    //   {
    //     from: resolvePath("dist/lava.js"),
    //     to: resolvePath("public/js")
    //   }
    // ])
  ]
});
