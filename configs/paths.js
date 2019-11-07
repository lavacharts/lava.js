const path = require("path");

const root = path.resolve(__dirname, "..");

const PATHS = {
  root,
  site: path.join(root, "site"),
  join: {}
};

["src", "dist", "public", "lavacharts"].forEach(dir => {
  PATHS[dir] = path.join(PATHS.root, dir);
  PATHS.join[dir] = (...args) => path.join(PATHS[dir], ...args);
});

["static", "examples", "templates"].forEach(dir => {
  PATHS[dir] = path.join(PATHS.site, dir);
  PATHS.join[dir] = (...args) => path.join(PATHS[dir], ...args);
});

module.exports = PATHS;
