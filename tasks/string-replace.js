'use strict';
// string-replace config

module.exports = {
  testing: {
    files: [{
      expand: true,
      cwd: 'testing/',
      src: '**/*.html',
      dest: 'testing/'
    }],
    options: {
      replacements: [{
        pattern: /(@path)/g,
        replacement: '../../../bower_components'
      }, {
        pattern: /(@demo-path)/g,
        replacement: '../../../../bower_components'
      }, {
        pattern: /(@test-path)/g,
        replacement: '../../../../bower_components'
      }, {
        pattern: /(@behavior-path)/g,
        replacement: '../../behaviors'
      }, {
        pattern: /(@components-path)/g,
        replacement: '../..'
      }]
    }
  },
  release: {
    files: [{
      expand: true,
      cwd: 'release/',
      src: '**/*.html',
      dest: 'release/'
    }],
    options: {
      replacements: [{
        pattern: /(@path)/g,
        replacement: '../..'
      }, {
        pattern: /(@demo-path)/g,
        replacement: '../../..'
      }, {
        pattern: /(@test-path)/g,
        replacement: '../../..'
      }, {
        pattern: /(@behavior-path)/g,
        replacement: '..'
      }, {
        pattern: /(@components-path)/g,
        replacement: '../..'
      }]
    }
  }
};
