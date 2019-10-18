const fs = require("fs");

const PATHS = require("./paths");

module.exports = fs
  .readdirSync(PATHS.examples)
  .filter(filename => filename.endsWith(".hbs"))
  .map(filename => filename.replace(/\.hbs$/, ""))
  .reduce(
    (entrys, filename) =>
      Object.assign(entrys, {
        [filename]: `./examples/js/${filename}.js`
      }),
    {}
  );
