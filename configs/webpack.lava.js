const merge = require("webpack-merge");

const PATHS = require("./paths");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  entry: PATHS.fromRoot("src/index.ts"),
  output: {
    path: PATHS.dist,
    filename: "lava.js",
    library: "LavaJs",
    libraryExport: "default",
    libraryTarget: "window"
  }
});
