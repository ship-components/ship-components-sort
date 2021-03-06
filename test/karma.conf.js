module.exports = function(config) {
  config.set({
    /**
     * The root folder to resolve from
     * @type {String}
     */
    basePath: '../',
    /**
     * Which testing frameworks
     * @type {Array}
     */
    frameworks: ['jasmine'],

    /**
     * Which browsers
     * @type {Array}
     */
    browsers: ['PhantomJS'],

    /**
     * Phantomjs specific tests
     * @type {Object}
     */
    phantomjsLauncher: {
      exitOnResourceError: true
    },
    /**
     * Which test files to run
     * @type {Array}
     */
    files: [
      './test/test-index.js'
    ],

    /**
     * Setup webpack to handle require statements
     * @type {Object}
     */
    preprocessors: {
      './test/test-index.js': ['webpack']
    },

    /**
     * Generate coverage data
     * @type {Object}
     */
    coverageReporter: {
      reporters: [{
        type: 'html',
        subdir: 'html'
      }, {
        type: 'lcovonly',
        subdir: '.'
      }]
    },

    /**
     * What to show after we run
     * @type {Array}
     */
    reporters: ['progress', 'coverage'],

    /**
     * Webpack specific settings
     * @type {Object}
     */
    webpack: {
      cache: true,
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            include: require('path').resolve('./src/Sort.js'),
            loader: 'istanbul-instrumenter'
          }
        ]
      }
    }
  });
};
