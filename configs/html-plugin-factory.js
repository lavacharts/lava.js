const fs = require("fs");
const HtmlPlugin = require("html-webpack-plugin");

const PATHS = require("./paths");

const commonChunks = ["vendor", "runtime", "commons"];

module.exports = page => {
  const config = {
    inject: "head",
    showErrors: true,
    // templateParameters: require("../examples/js/templateParameters"),
    templateParameters: {
      title: "lava.js",
      exampleCode: fs.readFileSync(PATHS.fromRoot(`examples/js/${page}.js`))
    },
    alwaysWriteToDisk: true // Option provided by html-webpack-harddisk-plugin
  };

  return new HtmlPlugin({
    ...config,
    chunks: [...commonChunks, page],
    template: PATHS.fromRoot(`examples/${page}.hbs`),
    filename: PATHS.fromRoot(`public/${page}.html`)
  });
};
