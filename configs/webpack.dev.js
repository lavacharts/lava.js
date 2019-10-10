const fs = require("fs");
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const PATHS = require("./paths");

const pages = {
  index: "./examples/js/index.js",
  events: "./examples/js/events.js",
  options: "./examples/js/options.js",
  formats: "./examples/js/formats.js",
  dataquery: "./examples/js/dataquery.js"
};

module.exports = merge(require("./webpack.common.js"), {
  entry: {
    commons: "./examples/js/bootstrap.js",
    ...pages
  },
  mode: "development",
  output: {
    publicPath: "/",
    path: PATHS.public,
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
        chunks: "all",
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  },
  plugins: [
    ...Object.keys(pages).map(page => {
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

      const commonChunks = ["vendor", "runtime", "commons"];

      return new HtmlPlugin({
        ...config,
        chunks: [...commonChunks, page],
        template: PATHS.fromRoot(`examples/${page}.hbs`),
        filename: PATHS.fromRoot(`public/${page}.html`)
      });
    }),
    new HtmlHarddiskPlugin()
  ]
});
