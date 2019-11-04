const _ = require("lodash");
const ErrorNotificationPlugin = require("webpack-error-notification");
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");

const PATHS = require("../paths");

const { htmlPluginFactory } = require("./htmlPluginFactory");
const templateEntries = require("./templateEntries");

module.exports = merge(require("../webpack.common.js"), {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    site: PATHS.join.static("site.js"),
    ...Object.assign(_.clone(templateEntries), {
      index: [
        PATHS.join.static("parallax-logo.js"),
        PATHS.join.examples("index.js")
      ]
    })
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
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        DEBUG: JSON.stringify("LavaJs*")
      }
    }),
    new CopyPlugin([
      {
        from: PATHS.join.examples("**/*.js"),
        to: PATHS.public,
        flatten: true
      }
    ]),
    new MiniCssExtractPlugin(),
    new ErrorNotificationPlugin(),
    ..._.map(templateEntries, htmlPluginFactory),
    new HtmlHarddiskPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // vendor: {
        //   test: /node_modules/,
        //   chunks: "initial",
        //   name: "vendor",
        //   enforce: true
        // },
        chunks: "all"
      }
    },
    runtimeChunk: {
      name: "runtime"
    }
  }
});
