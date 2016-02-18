module.exports = {
  'js-test': [
    'jsonlint',
    'jscs',
    'eslint:components',
  ],
  'css-test': [
    'stylint',
  ],
  'test': [
    'build',
    'wct-test',
  ],
  'build': [
    'clean:release',
    'js-test',
    'css-test',
    'postcss:precompiled-shared',
    'postcss:precompiled',
    'babel',
    'uglify:precompiled',
    'includes:components',
    'copy:components',
    'string-replace:release-components',
    'htmlmin:release',
    // 'clean:precompiled'
  ],
  'testing': [
    'build',
    'clean:testing',
    'includes:testing',
    'string-replace:testing-components',
  ],
  'default': [
    'build',
    'test',
  ]
};
