const path = require("path");

function resolvePath(...args) {
  return path.resolve(__dirname, "..", ...args);
}

module.exports = {
  resolvePath
};
