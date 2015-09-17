'use strict';
//uglify stylint

module.exports = {
  dist: {
    options: {
      config: {
        colons: 'never'
      }
    },
    src: ['src/**/*.styl']
  }
};
