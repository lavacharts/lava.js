module.exports = config => {
  config.set({
    frameworks: ["mocha", "sinon-chai", "viewport"],
    files: [
      "./node_modules/chai-shallow-deep-equal/chai-shallow-deep-equal.js",
      "./test/helpers.js",
      "./dist/lava.js",
      "./test/lava-api.spec.js"
      // "./test/LavaJs.spec.js",
      // "./test/DataQuery.spec.js"
    ],
    client: {
      chai: {
        includeStack: true
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
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    // browsers: ["ChromeHeadless"],
    plugins: [
      "karma-mocha",
      "karma-sinon",
      "karma-sinon-chai",
      "karma-viewport",
      "karma-mocha-reporter",
      //'karma-nightmare',
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-phantomjs-launcher"
    ],
    nightmareOptions: {
      width: 800,
      height: 600,
      show: true
    }
  });
};
