// Karma configuration

module.exports = function(config) {
  'use strict';

  var isTravis = require('is-travis');

  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-detect-browsers'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-ie-launcher'),
      require('karma-opera-launcher'),
      require('karma-safari-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-mocha-reporter')
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['detectBrowsers', 'mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/fastclick/lib/fastclick.js',
      'tests/specs/**/*.spec.js'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      },
      IE9: {
        base: 'IE',
        'x-ua-compatible': 'IE=EmulateIE9'
      }
    },

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // reporter options - full, autowatch, minimal
    mochaReporter: {
      output: 'full'
    },

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
    detectBrowsers : {
      postDetection: function(browsers) {
        var i;

        i = browsers.indexOf('Chrome');

        if (i !== -1 && isTravis) {
          browsers[i] = 'ChromeTravisCi';
        }

        if (browsers.indexOf('IE') > -1) {
          browsers[i] = 'IE9';
        }

        //Remove PhantomJS if another browser has been detected
        if (browsers.length > 1 && browsers.indexOf('PhantomJS') > -1) {
          i = browsers.indexOf('PhantomJS');

          if (i !== -1) {
            browsers.splice(i, 1);
          }
        }

        return browsers;
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };

  config.set(configuration);
};
