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
    'includes:components',
    'copy:components',
    'string-replace:release-components',
    'htmlmin:release',
    'clean:testing',
    'includes:testing',
    'string-replace:testing-components',
    'wct-test',
    'clean:precompiled',
    'clean:testing'
  ],
  'test': [
    'js-test',
    'css-test',
    'postcss:precompiled-shared',
    'postcss:precompiled',
    'babel',
    'uglify:precompiled',
    'clean:testing',
    'includes:testing',
    'string-replace:testing-components',
    'wct-test',
    'clean:precompiled',
    'clean:testing'
  ],
  'default': [
    'build'
  ]
};
