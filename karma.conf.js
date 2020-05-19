const webpackConfig = require("./configs/webpack.prod.js");

webpackConfig.stats = {};

module.exports = config => {
  config.set({
    files: [
      "./dist/lava.js",
      // "./node_modules/chai-shallow-deep-equal/chai-shallow-deep-equal.js",
      "./tests/utils/*.js",
      // "./tests/*.spec.js",
      { pattern: "tests/*.spec.js", watched: false }
    ],

    preprocessors: {
      "tests/*.spec.js": ["webpack"]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    client: {
      chai: {
        includeStack: false
      },
      mocha: {
        reporter: "html"
      }
    },

    mochaReporter: {
      showDiff: true
    },

    singleRun: false,

    reporters: ["dots"],

    logLevel: config.LOG_ERROR,

    browsers: ["ChromeHeadless"],

    frameworks: ["mocha", "chai", "viewport"]
  });
};
