const path = require("path");

module.exports.merge = require("webpack-merge");
module.exports.commonConfig = require("./webpack.common.js");

module.exports.resolvePath = (...args) =>
  path.resolve(__dirname, "..", ...args);
