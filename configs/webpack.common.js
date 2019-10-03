const path = require("path");
const { ProgressPlugin } = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const resolvePath = (...args) => path.resolve(__dirname, "..", ...args);

module.exports = {
  context: resolvePath(),
  entry: resolvePath("index.ts"),
  output: {
    filename: "lava.js",
    path: resolvePath("dist")
    // library: "lava",
    // libraryTarget: "window",
  },
  plugins: [
    new ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin({
      eslint: true
    })
  ],
  module: {
    rules: [
      {
        test: /.(ts|tsx)?$/,
        loader: "ts-loader",
        include: [resolvePath("src")],
        exclude: [/node_modules/],
        options: { transpileOnly: true }
      },
      {
        test: /LavaJs\.ts$/,
        loader: "string-replace-loader",
        options: {
          search: "__VERSION__",
          replace: require("../package.json").version,
          strict: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
