const path = require("path");

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const StripLoader = require("strip-loader");
const { DefinePlugin, NormalModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");

const PATHS = require("./paths");
const common = require("./webpack.common.js");

const config = {
  mode: "production",
  stats: "minimal",
  entry: PATHS.join.src("lava.ts"),
  output: {
    path: PATHS.dist,
    filename: "lava.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: StripLoader.loader("debug", "this.debug", "console.log"),
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        DEBUG: JSON.stringify("")
      }
    }),
    new NormalModuleReplacementPlugin(
      /debug/,
      path.resolve(__dirname, "noopDebug.js")
    ),
    new CopyPlugin([
      {
        from: PATHS.join.lavacharts("index.js"),
        to: PATHS.join.dist("lavacharts.js")
      }
    ])
  ]
};

if (process.env.ANALYZE) {
  config["plugins"] = [new BundleAnalyzerPlugin()];
}

module.exports = merge(common, config);
