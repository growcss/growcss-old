'use strict';
//watch config

module.exports = {
  js: {
    files: ['src/components/**/assets/*.js', 'src/components/**/test/*.js'],
    tasks: ['jscs', 'eslint:components', 'babel', 'includes:testing', 'string-replace:testing-components'],
    options: {
      spawn: false
    }
  },
  css: {
    files: ['src/components/**/assets/*.css'],
    tasks: ['postcss', 'includes:testing', 'includes:testing', 'string-replace:testing-components'],
    options: {
      spawn: false
    }
  },
  html: {
    files: ['src/components/**/*.html', 'src/components/**/demo/*.html', 'src/components/**/test/*.html'],
    tasks: ['includes:testing', 'string-replace:testing-components'],
    options: {
      spawn: false
    }
  }
};
