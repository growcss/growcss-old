'use strict';
//postcss config

var autoprefixer = require('autoprefixer-core');

module.exports = {
    options: {
      processors: [
        autoprefixer({
            browers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
        }).postcss
      ]
    },
    dist: {
        files: {
            'dist/': 'css/*.css'
        }
    }
};
