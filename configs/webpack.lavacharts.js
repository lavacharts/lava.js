const merge = require("webpack-merge");

const PATHS = require("./paths");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  entry: {
    lavacharts: PATHS.fromRoot("src/lib/lavacharts.ts")
  },
  output: {
    path: PATHS.dist,
    filename: "[name].js"
  }
});
