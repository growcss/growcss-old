'use strict';
//htmlmin config

module.exports = {
  'release': {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: 'release/',
      src: '**/*.html',
      dest: 'release/'
    }]
  }
};
