const ErrorNotificationPlugin = require("webpack-error-notification");
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");

const PATHS = require("./paths");

const examplePages = require("./example-pages");

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  entry: {
    vendor: [
      "materialize-css/dist/js/materialize.min.js",
      "materialize-css/dist/css/materialize.min.css",
      "prismjs/prism.js",
      "prismjs/themes/prism.css"
    ],
    common: ["./src/lava.ts", "./examples/js/site.js"],
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
      errors: true
    },
    watchContentBase: true,
    contentBase: [PATHS.public, PATHS.examples]
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // new CleanPlugin(),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        DEBUG: JSON.stringify("LavaJs*")
      }
    }),
    new ErrorNotificationPlugin(),
    ...Object.keys(examplePages).map(page => {
      return new HtmlPlugin({
        inject: "head",
        meta: {
          viewport: "width=device-width, initial-scale=1.0"
        },
        showErrors: true,
        templateParameters: require("./templateParameters")(page),
        // alwaysWriteToDisk: true, // Option provided by html-webpack-harddisk-plugin
        // inlineSource: /\.css$/, // Option provided by html-webpack-inline-source-plugin
        chunks: ["vendor", "runtime", "common", page],
        template: PATHS.fromRoot(`examples/${page}.hbs`),
        filename: PATHS.fromRoot(`public/${page}.html`)
      });
    }),
    new HtmlHarddiskPlugin(),
    new HtmlInlineSourcePlugin()
  ],
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
  resolve: {
    alias: {
      "~": PATHS.fromRoot("node_modules")
    }
  }
});
