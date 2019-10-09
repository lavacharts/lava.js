const merge = require("webpack-merge");

const PATHS = require("./paths");

module.exports = merge(require("./webpack.common.js"), {
  mode: "production",
  entry: PATHS.fromRoot("index.ts"),
  output: {
    filename: "lava.js",
    path: PATHS.dist
  },
  devtool: "source-map"
});
