const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, "index.ts"),
  output: {
    // library: "lava",
    filename: "lava.js",
    // libraryTarget: "window",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin({
        eslint: true
      }),
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
        exclude: [/node_modules/],
        options: { transpileOnly: true }
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
