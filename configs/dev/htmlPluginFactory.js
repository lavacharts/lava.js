const fs = require("fs");

const HtmlPlugin = require("html-webpack-plugin");

const PATHS = require("../paths");
const { version } = require("../../package.json");

function htmlPluginFactory(page) {
  return new HtmlPlugin({
    inject: "head",
    title: page === "index" ? "LavaJs" : `LavaJs | ${page}`,
    meta: {
      viewport: "width=device-width, initial-scale=1.0"
    },
    // publicPath: "./",
    showErrors: true,
    templateParameters() {
      let exampleCode = "";
      try {
        exampleCode = fs.readFileSync(PATHS.join.examples(`${page}.js`));
        exampleCode = exampleCode.replace(/^(import.)$/, "");
      } catch (e) {
        exampleCode = e.toString();
      }
      return {
        page,
        version,
        exampleCode,
        headerTitle: page === "index" ? "LavaJs" : `LavaJs | ${page}`
      };
    },
    alwaysWriteToDisk: true,
    chunks: ["runtime", "site", page],
    // chunksSortMode: "manual",
    template: PATHS.join.templates(`${page}.hbs`),
    filename: PATHS.join.public(`${page}.html`)
  });
}

exports.htmlPluginFactory = htmlPluginFactory;
