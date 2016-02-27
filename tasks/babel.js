'use strict';
// babel config

module.exports = {
  options: {
    sourceMap: false,
    presets: [
      'es2015'
    ]
  },
  'precompiled-components': {
    files: [{
      expand: true,
      cwd: 'src/components/',
      src: ['**/assets/*.js'],
      dest: 'precompiled/'
    }]
  },
  'precompiled-behaviors': {
    files: [{
      expand: true,
      cwd: 'src/behaviors/',
      src: ['**/assets/*.js'],
      dest: 'precompiled/'
    }]
  }
};
