const path = require("path");
const fs = require("fs");

const CopyPlugin = require("copy-webpack-plugin");
const ErrorNotificationPlugin = require("webpack-error-notification");
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");

const PKG = require("../package.json");

const PATHS = require("./paths");
const examplePages = require("./example-pages");

function htmlPluginFactory(page) {
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
        exampleCode = fs.readFileSync(PATHS.fromRoot(examplePages[page]));
      } catch (e) {
        exampleCode = e.toString();
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
}

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  // devtool: "inline-source-map",
  entry: {
    site: "./examples/js/site.js",
    ...examplePages
  },
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
    overlay: { errors: true },
    watchContentBase: true,
    contentBase: [PATHS.public, PATHS.examples, PATHS.static]
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: [PATHS.static],
        use: {
          loader: "file-loader",
          options: {
            name: "[name]-[hash].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: "/",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "resolve-url-loader",
            options: {
              debug: true,
              root: ""
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new CleanPlugin(),
    // new CopyPlugin([
    //   {
    //     from: "./examples/img",
    //     to: "img"
    //   }
    // ]),
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        DEBUG: JSON.stringify("LavaJs*")
      }
    }),
    new MiniCssExtractPlugin(),
    new ErrorNotificationPlugin(),
    ...Object.keys(examplePages).map(htmlPluginFactory),
    new HtmlHarddiskPlugin()
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
