const path = require("path");

const PATHS = {
  root: path.resolve(__dirname, ".."),
  join: {}
};

["src", "dist", "html", "public", "static", "examples", "templates"].forEach(
  dir => {
    PATHS[dir] = path.join(PATHS.root, dir);
    PATHS.join[dir] = (...args) => path.join(PATHS[dir], ...args);
  }
);

module.exports = PATHS;
