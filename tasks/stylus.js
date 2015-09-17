'use strict';
//stylus config

var autoprefixer = require('autoprefixer'),
  poststylusAutoprefixer = function () {
    return require('poststylus')([
      autoprefixer({ browsers: ['ie 7', 'ie 8'] }),
    ]);
  };

module.exports = {
  dist: {
    compile: {
      options: {
        use: [poststylusAutoprefixer, 'cssnano', 'pixrem', 'reporter']
      },
      files: {
        'dist/style.css': 'src/main.styl'
      }
    }
  }
};
