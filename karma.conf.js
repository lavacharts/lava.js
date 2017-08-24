/* jshint node:true */

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'sinon'],
        files: [
            './node_modules/jasmine-sinon/lib/jasmine-sinon.js',
            './dist/lava.min.js',
            './tests/testing-utils.js',
            './tests/lava.spec.js'
        ],
        singleRun: false,
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        browsers: [(process.env.TRAVIS ? 'PhantomJS' : 'Chrome')],
        plugins: [
            'karma-jasmine',
            'karma-sinon',
            'karma-nightmare',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],
        nightmareOptions: {
            width: 800,
            height: 600,
            show: false,
        }
    });
};
