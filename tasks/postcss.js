'use strict';
//postcss config

module.exports = {
    options: {
      processors: [
        require('pixrem')(),
        require('autoprefixer-core')({
            browers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
        })
      ]
    },
    dist: {
        files: {
            'dist/': 'css/*.css'
        }
    }
};
