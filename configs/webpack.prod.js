const { merge, commonConfig } = require("./helpers");

module.exports = merge(commonConfig, {
  mode: "production"
});
