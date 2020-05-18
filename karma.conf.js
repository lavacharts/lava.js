module.exports = config => {
  config.set({
    files: [
      "./dist/lava.js",
      "./node_modules/chai-shallow-deep-equal/chai-shallow-deep-equal.js",
      "./tests/utils/*.js",
      // "./tests/*.spec.js",
      { pattern: "tests/*.spec.js", watched: false }
    ],

    preprocessors: {
      "tests/*.spec.js": ["webpack"]
    },

    webpack: {
      ...require("./configs/webpack.prod.js")
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      // webpack configuration
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

    reporters: ["mocha"],

    logLevel: config.LOG_ERROR,

    browsers: ["ChromeHeadless"],

    frameworks: ["mocha", "chai", "viewport"],

    plugins: [
      "karma-mocha",
      "karma-chai",
      "karma-webpack",
      "karma-viewport",
      "karma-mocha-reporter",
      "karma-chrome-launcher"
    ]
  });
};
