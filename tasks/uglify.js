'use strict';
// uglify config

module.exports = {
  precompiled: {
    files: [{
      expand: true,
      cwd: 'precompiled/',
      src: '**/assets/*.js',
      dest: 'precompiled/'
    }]
  }
};
