'use strict';
//pagespeed config

module.exports = {
  postcss: {
    options: {
      map: false, // inline sourcemaps

      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: 'css/*.css'
    }
  }
}
