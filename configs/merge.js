const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = webpackConfig => merge(commonConfig, webpackConfig);
