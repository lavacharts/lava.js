/* jshint node:true */

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai', 'viewport'],
        files: [
            './node_modules/chai-shallow-deep-equal/chai-shallow-deep-equal.js',
            './test/helpers.js',
            './dist/lava.min.js',
            './test/LavaJs.spec.js',
            './test/DataQuery.spec.js'
        ],
        client: {
            chai: {
                includeStack: true
            },
            mocha: {
                reporter: 'html'
            }
        },
        singleRun: false,
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        //browsers: [(process.env.TRAVIS ? 'PhantomJS' : 'Chrome')],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-mocha',
            'karma-sinon',
            'karma-sinon-chai',
            'karma-viewport',
            //'karma-nightmare',
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
