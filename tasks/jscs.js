'use strict';
//jscs config

module.exports = {
  components: {
    src: [
      'src/components/**/assets/*.js',
      'src/components/**/test/*.js',
    ],
    options: {
      config: '.jscsrc',
      fix: true
    },
  },
  shared: {
    src: [
      'src/shared/js/*.js'
    ],
    options: {
      config: '.jscsrc',
      fix: true
    },
  }
};
