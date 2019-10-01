const path = require("path");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    open: true,
    inline: true,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: path.resolve(__dirname, "examples/index.html")
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "examples"),
        to: path.resolve(__dirname, "build")
      }
    ])
  ]
});
