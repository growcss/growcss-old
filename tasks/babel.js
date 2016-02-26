'use strict';
//babel config

module.exports = {
  options: {
    sourceMap: false,
    presets: [
      'es2015'
    ],
    plugins: [],
  },
  precompiled: {
    files: [{
        expand: true,
        cwd: 'src/components/',
        src: ['**/assets/*.js'],
        dest: 'precompiled/'
    }],
  }
};
