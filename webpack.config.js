const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const DashboardPlugin = require("webpack-dashboard/plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  devtool: "inline-source-map",

  devServer: {
    open: true
  },

  context: __dirname,
  output: {
    filename: "lava.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    // new DashboardPlugin(),
    new HtmlWebpackPlugin({
      inject: "head",
      template: path.resolve(__dirname, "examples/index.html"),
      templateParameters: {
        version: require("./package.json").version
      }
    }),
    new CopyWebpackPlugin([
      {
        from: "examples"
      }
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    })
  ],

  module: {
    rules: [
      {
        test: /.(ts|tsx)?$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/]
      },
      {
        test: /LavaJs\.ts$/,
        loader: "string-replace-loader",
        options: {
          search: "__VERSION__",
          replace: require("./package.json").version,
          strict: true
        }
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
