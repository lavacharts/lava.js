const ErrorNotificationPlugin = require("webpack-error-notification");
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const fs = require("fs");

const PKG = require("../package.json");
const PATHS = require("./paths");
const examplePages = require("./example-pages");

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  entry: {
    site: "./examples/js/site.js",
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    // new CleanPlugin(),
    new MiniCssExtractPlugin(),
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
        templateParameters() {
          let exampleCode = "";

          try {
            exampleCode = fs.readFileSync(
              PATHS.fromRoot(examplePages[page])
            );
          } catch (e) {
            //
          }

          return {
            title: "LavaJs",
            version: PKG.version,
            exampleCode
          };
        },
        alwaysWriteToDisk: true, // Option provided by html-webpack-harddisk-plugin
        // inlineSource: /\.css$/, // Option provided by html-webpack-inline-source-plugin
        chunks: ["runtime", "site", page],
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
        chunks: "all"
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  }
});
