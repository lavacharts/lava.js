const merge = require("webpack-merge");

const PATHS = require("./paths");
const common = require("./webpack.common.js");

const options = {
  mode: "production",
  devtool: "source-map"
};

module.exports = [
  merge(common, options, {
    entry: PATHS.fromRoot("src/index.ts"),
    output: {
      path: PATHS.dist,
      filename: "lava.js",
      library: "LavaJs",
      libraryExport: "default",
      libraryTarget: "window"
    }
  }),
  merge(common, options, {
    entry: PATHS.fromRoot("src/lavacharts.ts"),
    output: {
      path: PATHS.dist,
      filename: "lavajs.lavacharts.js"
    }
  })
];
