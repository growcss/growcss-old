'use strict';
// jscs config

module.exports = {
  options: {
    config: '.jscsrc',
    fix: true
  },
  components: {
    src: [
      'src/components/**/assets/*.js',
      'src/components/**/test/*.js'
    ]
  },
  behaviors: {
    src: [
      'src/behaviors/**/assets/*.js',
      'src/behaviors/**/test/*.js'
    ]
  },
  shared: {
    src: 'src/shared/js/*.js'
  }
};
