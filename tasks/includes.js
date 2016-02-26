'use strict';
//includes config

module.exports = {
  components: {
    cwd: 'src',
    src: 'components/**/*.html',
    dest: 'release/',
    options: {
      includePath: 'precompiled'
    }
  },
  testing: {
    cwd: 'src',
    src: 'components/**/*.html',
    dest: 'testing/',
    options: {
      includePath: 'precompiled'
    }
  }
};
