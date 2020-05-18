const fs = require("fs");

/** @type {import('bili').Config} */
module.exports = {
  output: "dist",
  input: "src/lava.ts",
  bundleNodeModules: ["tiny-emitter"],
  banner: fs.readFileSync("./LICENSE")
};
