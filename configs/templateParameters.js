const fs = require("fs");

const examplePages = require("./example-pages");
const PATHS = require("./paths");
const PKG = require("../package.json");

module.exports = page => () => {
  let exampleCode = "";

  try {
    exampleCode = fs.readFileSync(PATHS.fromRoot(examplePages[page]));
  } catch (e) {
    //
  }

  return {
    title: "LavaJs",
    version: PKG.version,
    exampleCode
  };
};
