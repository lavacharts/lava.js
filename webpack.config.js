const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./index.ts",
  devtool: "inline-source-map",

  devServer: {
    open: true
  },

  output: {
    filename: "lava.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "head",
      template: path.resolve(__dirname, "examples/index.html")
    }),
    new CopyWebpackPlugin([{ from: "examples" }])
  ],

  module: {
    rules: [
      {
        test: /.(ts|tsx)?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/]
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
