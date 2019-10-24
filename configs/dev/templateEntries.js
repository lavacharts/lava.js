const fs = require("fs");

const PATHS = require("../paths");

module.exports = fs
  .readdirSync(PATHS.templates)
  .filter(filename => filename.endsWith(".hbs"))
  .map(filename => filename.replace(/\.hbs$/, ""))
  .reduce(
    (entries, filename) =>
      Object.assign(entries, {
        [filename]: PATHS.join.examples(`${filename}.js`)
      }),
    {}
  );
