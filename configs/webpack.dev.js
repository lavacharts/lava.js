const fs = require("fs");
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const ErrorNotificationPlugin = require("webpack-error-notification");
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const PATHS = require("./paths");

const commonChunks = ["vendor", "runtime", "lava"];

const examplePages = fs
  .readdirSync(PATHS.examples)
  .filter(filename => filename.endsWith(".hbs"))
  .map(filename => filename.replace(/\.hbs/, ""))
  .reduce(
    (entrys, filename) =>
      Object.assign(entrys, {
        [filename]: `./examples/js/${filename}.js`
      }),
    {}
  );

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  entry: {
    vendor: ["materialize-css", "prismjs"],
    lava: "./src/index.ts",
    ...examplePages
  },
  output: {
    publicPath: "",
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
    new CleanPlugin(),
    new ErrorNotificationPlugin(),
    ...Object.keys(examplePages).map(page => {
      const config = {
        inject: "head",
        showErrors: true,
        // templateParameters: require("../examples/js/templateParameters"),
        templateParameters: {
          title: "lava.js",
          exampleCode: fs.readFileSync(PATHS.fromRoot(examplePages[page]))
        },
        alwaysWriteToDisk: true // Option provided by html-webpack-harddisk-plugin
      };

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
