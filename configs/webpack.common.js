const { ProgressPlugin } = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const { resolvePath } = require(".");

module.exports = {
  context: resolvePath(),
  entry: resolvePath("index.ts"),
  output: {
    filename: "lava.js",
    path: resolvePath("dist")
    // publicPath: resolvePath("public")
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
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        include: [resolvePath("src")],
        exclude: [/node_modules/],
        options: { transpileOnly: true }
      },
      {
        test: /LavaJs\.ts$/,
        loader: "string-replace-loader",
        options: {
          strict: true,
          search: "__VERSION__",
          replace: require("../package.json").version
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
