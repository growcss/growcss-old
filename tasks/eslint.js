'use strict';
//eslint config

module.exports = {
  components: {
    options: {
      configFile: '.eslintrc'
    },
    src: ['src/components/**/assets/*.js']
  },
  shared: {
    options: {
      configFile: '.eslintrc'
    },
    src: ['src/shared/js/*.js']
  }
};
