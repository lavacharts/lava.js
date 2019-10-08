const merge = require("webpack-merge");

const { PATHS } = require(".");

module.exports = merge(require("./webpack.common.js"), {
  mode: "production",
  devtool: "source-map",
  output: { path: PATHS.dist }
});
