'use strict';
// includes config

module.exports = {
  components: {
    cwd: 'src',
    src: 'components/**/*.html',
    dest: 'release/',
    options: {
      includePath: 'precompiled'
    }
  },
  behaviors: {
    cwd: 'src',
    src: 'behaviors/**/*.html',
    dest: 'release/',
    options: {
      includePath: 'precompiled'
    }
  },
  'testing-components': {
    cwd: 'src',
    src: 'components/**/*.html',
    dest: 'testing/',
    options: {
      includePath: 'precompiled'
    }
  },
  'testing-behaviors': {
    cwd: 'src',
    src: 'behaviors/**/*.html',
    dest: 'testing/',
    options: {
      includePath: 'precompiled'
    }
  }
};
