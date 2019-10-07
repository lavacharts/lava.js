const merge = require("webpack-merge");

const { resolvePath } = require(".");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "lava.js",
    path: resolvePath("dist")
  }
});
