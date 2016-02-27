module.exports = {
  'js-test': [
    'jsonlint',
    'jscs',
    'eslint:components'
  ],
  'css-test': [
    'stylint'
  ],
  'build': [
    'js-test',
    'css-test',
    'postcss:precompiled-shared',
    'postcss:precompiled',
    'babel',
    'uglify:precompiled',
    'cssmin:precompiled-components',
    'cssmin:precompiled-shared',
    'clean:release',
    'includes:components',
    'copy:components',
    'string-replace:release-components',
    'htmlmin:release',
    'clean:testing',
    'includes:testing',
    'string-replace:testing-components',
    'clean:precompiled',
    'wct-test',
    'clean:testing'
  ],
  'test': [
    'js-test',
    'css-test',
    'postcss:precompiled-shared',
    'postcss:precompiled',
    'babel',
    'uglify:precompiled',
    'cssmin:precompiled-components',
    'cssmin:precompiled-shared',
    'clean:testing',
    'includes:testing',
    'string-replace:testing-components',
    'clean:precompiled',
    'wct-test',
    // 'clean:testing'
  ],
  'default': [
    'build'
  ]
};
