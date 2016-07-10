module.exports = {
  'js-test': [
    'eslint:components',
    'eslint:behaviors',
    // 'eslint:shared'
  ],
  'compile': [
    'clean:testing',
    'js-test',
    'copy:normalize',
    'copy:sanitize',
    'copy:cookies',
    'copy:event',
    'copy:video',
    'copy:hash',
    'copy:waterfall',
    'postcss:precompiled-shared',
    'postcss:precompiled',
    'babel:precompiled-components',
    'babel:precompiled-behaviors',
    'uglify:precompiled',
    'cssmin:precompiled-components',
    'cssmin:precompiled-shared',
  ],
  'build': [
    'compile',
    // Testing Start
    'includes:testing-components',
    'includes:testing-behaviors',
    'string-replace:testing',
    'wct-test',
    'clean:testing',
    // Testing End

    // Release Start
    'clean:release',
    'includes:components',
    'includes:behaviors',
    'copy:components',
    'copy:behaviors',
    'string-replace:release',
    'htmlmin:release',
    'clean:precompiled'
    // Release End
  ],
  'testing': [
    'compile',
    // Testing Start
    'includes:testing-components',
    'includes:testing-behaviors',
    'string-replace:testing',
    'clean:precompiled'
    // Testing End
  ],
  'test': [
    'testing',
    'wct-test',
    'clean:testing'
  ],
  'default': [
    'build'
  ],
  'serve': [
    'testing',
    'exec:serve'
  ],
};
