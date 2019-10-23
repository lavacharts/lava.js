const path = require("path");

const appRoot = path.resolve(__dirname, "..");

const PATHS = {
  root: appRoot,
  src: path.join(appRoot, "src"),
  dist: path.join(appRoot, "dist"),
  html: path.join(appRoot, "html"),
  public: path.join(appRoot, "public"),
  static: path.join(appRoot, "static"),
  examples: path.join(appRoot, "examples"),
  templates: path.join(appRoot, "templates")
};

PATHS.join = {
  src: (...args) => path.join(PATHS.src, ...args),
  root: (...args) => path.join(PATHS.root, ...args),
  public: (...args) => path.join(PATHS.public, ...args),
  static: (...args) => path.join(PATHS.static, ...args),
  examples: (...args) => path.join(PATHS.examples, ...args),
  templates: (...args) => path.join(PATHS.templates, ...args)
};

module.exports = PATHS;
