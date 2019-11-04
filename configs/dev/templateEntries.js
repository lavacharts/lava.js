const fs = require("fs");

const PATHS = require("../paths");

function getHbsFromPath(path) {
  return fs
    .readdirSync(path)
    .filter(filename => filename.endsWith(".hbs"))
    .map(filename => filename.replace(/\.hbs$/, ""));
}

module.exports = getHbsFromPath(PATHS.templates).reduce(
  (entries, filename) =>
    Object.assign(entries, {
      [filename]: PATHS.join.examples(`${filename}.js`)
    }),
  {}
);
