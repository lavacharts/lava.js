/* jshint node:true */

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            './dist/lava.min.js',
            './test/testing-utils.js',
            './test/LavaJs.spec.js',
            './test/DataQuery.spec.js'
        ],
        client: {
            chai: {
                includeStack: true
            },
            mocha: {
                // change Karma's debug.html to the mocha web reporter
                reporter: 'html',

                // require specific files after Mocha is initialized
                //require: [require.resolve('mocha-sinon')],

                // custom ui, defined in required file above
                //ui: 'bdd-lazy-var/global',
            }
        },
        singleRun: false,
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        browsers: [(process.env.TRAVIS ? 'PhantomJS' : 'Chrome')],
        plugins: [
            'karma-mocha',
            'karma-sinon',
            'karma-sinon-chai',
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
