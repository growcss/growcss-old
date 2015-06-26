// Karma configuration
// Generated on Mon Jun 15 2015 21:08:55 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function(config) {
  'use strict';

  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '/',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'detectBrowsers'],

    plugins: [
      require('karma-jasmine'),
      require('karma-detect-browsers'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-ie-launcher'),
      require('karma-safari-launcher'),
      require('karma-opera-launcher'),
      require('karma-phantomjs-launcher'),
    ],

    // list of files / patterns to load in the browser
    files: [
      'tests/src/js/**/*.spec.js',
      'tests/src/scss/**/*.tests.js'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // CLI --browsers Chrome,Firefox,Safari
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

    detectBrowsers : {
      postDetection: function(browsers) {
        var index = browsers.indexOf('Chrome');

        if(index !== -1) {
          browsers[index] = 'ChromeTravisCi';
        }

        return browsers;
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };

  if (process.env.TRAVIS) {
      configuration.browsers = ['ChromeTravisCi'];
  }

  config.set(configuration);
};
