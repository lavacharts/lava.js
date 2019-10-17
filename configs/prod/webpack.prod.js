const StripLoader = require("strip-loader");
const { DefinePlugin } = require("webpack");
const merge = require("webpack-merge");

const common = require("../webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: StripLoader.loader("this.debug")
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        DEBUG: JSON.stringify("")
      }
    })
  ]
});
