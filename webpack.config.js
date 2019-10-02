const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDevServer = process.env.WEBPACK_DEV_SERVER;

module.exports = (env, argv) => console.log(argv)

const config = {
  context: __dirname,
  mode: "development",
  entry: path.resolve(__dirname, "index.ts"),
  devtool: "source-map",
  output: {
    // library: "lava",
    filename: "lava.min.js",
    // libraryTarget: "window",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    ...[
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
    ...(isDevServer ? devPlugins : [])
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
