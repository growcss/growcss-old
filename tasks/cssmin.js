'use strict';
// cssmin config

module.exports = {
  'precompiled-components': {
    files: [{
      expand: true,
      cwd: 'precompiled/',
      src: '**/assets/*.css',
      dest: 'precompiled/'
    }]
  },
  'precompiled-shared': {
    files: [{
      expand: true,
      cwd: 'precompiled/shared',
      src: '**/*.css',
      dest: 'precompiled/shared'
    }]
  }
};
