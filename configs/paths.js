const path = require("path");

const appRoot = path.resolve(__dirname, "..");

module.exports = {
  root: appRoot,
  src: path.join(appRoot, "src"),
  dist: path.join(appRoot, "dist"),
  public: path.join(appRoot, "public"),
  examples: path.join(appRoot, "examples")
};
