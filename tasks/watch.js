'use strict';
// watch config

module.exports = {
  components: {
    files: ['src/components/**/assets/*.js', 'src/components/**/test/*.js', 'src/components/**/*.html', 'src/components/**/demo/*.html', 'src/components/**/test/*.html', 'src/components/**/assets/*.css'],
    tasks: [
      'eslint:components',
      'copy:hash',
      'postcss:precompiled-shared',
      'postcss:precompiled',
      'babel:precompiled-components',
      'uglify:precompiled',
      'cssmin:precompiled-components',
      'cssmin:precompiled-shared',
      'includes:testing-components',
      'string-replace:testing',
      'clean:precompiled'
    ],
    options: {
      spawn: false
    }
  },
  behaviors: {
    files: ['src/behaviors/**/assets/*.js', 'src/behaviors/**/test/*.js', 'src/behaviors/**/*.html', 'src/behaviors/**/demo/*.html', 'src/behaviors/**/test/*.html'],
    tasks: [
      'eslint:behaviors',
      'copy:cookies',
      'copy:event',
      'copy:video',
      'babel:precompiled-behaviors',
      'includes:testing-behaviors',
      'string-replace:testing',
      'clean:precompiled'
    ],
    options: {
      spawn: false
    }
  }
};
