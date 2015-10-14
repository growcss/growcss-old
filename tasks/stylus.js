'use strict';
//stylus config

var autoprefixer = require('autoprefixer'),
  poststylus = require('poststylus');

module.exports = {
  dist: {
    compile: {
      options: {
        use: [
          poststylus([
            autoprefixer({
              browsers: ['ie 8', 'last 2 versions']
            }),
            'cssnano',
            'pixrem',
            'postcss-reporter'
          ])
        ]
      },
      use: [
        require('growcss-ivory')
      ],
      files: {
        'dist/css/growcss.css': 'src/stylus/growcss.styl'
      }
    }
  }
};
