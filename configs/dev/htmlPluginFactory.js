const fs = require("fs");

const HtmlPlugin = require("html-webpack-plugin");

const PATHS = require("../paths");
const { version } = require("../../package.json");

function htmlPluginFactory(entry, page) {
  return new HtmlPlugin({
    inject: "head",
    title: page === "index" ? "LavaJs" : `LavaJs | ${page}`,
    meta: {
      viewport: "width=device-width, initial-scale=1.0"
    },
    showErrors: true,
    templateParameters() {
      let exampleCode = "";

      try {
        exampleCode = fs.readFileSync(entry);
      } catch (e) {
        exampleCode = e.toString();
      }

      return {
        page,
        version,
        exampleCode
      };
    },
    alwaysWriteToDisk: true,
    chunks: ["runtime", "site", page],
    // chunksSortMode: "manual",
    template: entry.replace("examples", "templates").replace(/js$/, "hbs"),
    filename: PATHS.join.public(`${page}.html`)
  });
}

exports.htmlPluginFactory = htmlPluginFactory;
