'use strict';
// eslint config

module.exports = {
  options: {
    configFile: '.eslintrc'
  },
  components: {
    src: ['src/components/**/assets/*.js']
  },
  behaviors: {
    src: ['src/behaviors/**/assets/*.js']
  },
  shared: {
    src: ['src/shared/js/*.js']
  }
};
