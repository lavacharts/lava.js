const rm = require("rimraf");
const merge = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const WebpackStrip = require("strip-loader");

const PATHS = require("./paths");
const common = require("./webpack.common.js");

const options = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: WebpackStrip.loader("debug", "console.log")
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        DEBUG: JSON.stringify("")
      }
    })
  ]
};

rm(`${PATHS.dist}/*`, () => {
  console.log(`rm -rf ${PATHS.dist}/* `);
});

module.exports = [
  merge(common, options, {
    entry: PATHS.fromRoot("src/index.ts"),
    output: {
      path: PATHS.dist,
      filename: "lava.js"
    }
  }),
  merge(common, options, {
    entry: PATHS.fromRoot("src/lavacharts.ts"),
    output: {
      path: PATHS.dist,
      filename: "lavajs-lavacharts.js"
    }
  })
];
