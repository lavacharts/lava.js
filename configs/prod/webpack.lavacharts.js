const merge = require("webpack-merge");

const PATHS = require("../paths");

const prod = require("./webpack.prod.js");

module.exports = merge(prod, {
  entry: PATHS.join.src("lavacharts.ts"),
  output: {
    path: PATHS.dist,
    filename: "lavajs-lavacharts.js"
  }
});
