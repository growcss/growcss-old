module.exports = {
  'js-test': [
    'eslint:components',
    'eslint:behaviors',
    // 'eslint:shared'
  ],
  'compile': [
    'js-test',
    'copy:normalize',
    'copy:cookies',
    'copy:event',
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
  'test': [
    'compile',
    // Testing Start
    'includes:testing-components',
    'includes:testing-behaviors',
    'string-replace:testing',
    'clean:precompiled',
    'wct-test'
    // 'clean:testing'
    // Testing End
  ],
  'default': [
    'build'
  ],
  'serve': [
    'exec:serve'
  ]
};
