const HandlebarsPlugin = require("handlebars-webpack-plugin");
// const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
// const { HashedModuleIdsPlugin } = require("webpack");
const merge = require("webpack-merge");

const PATHS = require("./paths");

const pages = [
  "index",
  "events"
  // "options",
  // "formats",
  // "dataquery"
];

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  entry: PATHS.createEntryMap(pages),
  output: {
    path: PATHS.public,
    // chunkFilename: '[name].js',
    filename: "[name].js"
  },
  devServer: {
    // hot: true,
    // open: true,
    inline: true,
    stats: "errors-only",
    overlay: {
      errors: true,
      warnings: true
    },
    watchContentBase: true,
    contentBase: PATHS.public
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    ...pages.map(page => {
      return new HtmlPlugin({
        inject: "head",
        showErrors: true,
        templateParameters: require("../examples/js/templateParameters"),
        // alwaysWriteToDisk: true, // Option provided by html-webpack-harddisk-plugin
        template: path.join(PATHS.examples, `${page}.hbs`),
        filename: path.join(PATHS.html, `${page.replace(/\.[a-z]+$/, "")}.html`)
      });
    }),
    // new HtmlHarddiskPlugin(),
    new HandlebarsPlugin({
      htmlPlugin: {
        enabled: true, // register all partials from html-webpack-plugin, defaults to `false`
        prefix: "html" // where to look for htmlPlugin output. default is "html"
      },
      entry: path.join(PATHS.examples, "*.hbs"),
      output: path.join(PATHS.public, "[name].html"),
      partials: [
        path.join(PATHS.html, "*", "*.hbs"),
        path.join(process.cwd(), "src", "hbs", "*", "*.hbs")
      ]
    })
  ]
});
