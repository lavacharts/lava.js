const path = require("path");

const appRoot = path.resolve(__dirname, "..");

module.exports = {
  root: appRoot,
  src: path.join(appRoot, "src"),
  dist: path.join(appRoot, "dist"),
  html: path.join(appRoot, "html"),
  public: path.join(appRoot, "public"),
  examples: path.join(appRoot, "examples"),

  fromRoot: (...args) => path.join(appRoot, ...args),
  createEntryMap: pages =>
    Object.assign(
      ...pages.map(function(page) {
        return {
          [page]: path.join(appRoot, `examples/js/${page}.js`)
        };
      })
    )
};
