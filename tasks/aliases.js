module.exports = {
    'cs-test': [
        'jsonlint',
        'jscs',
        'jshint'
    ],
    'test': [
        'cs-test'
    ],
    'default': [
        'cs-test'
    ],
    'build': [
        'cs-test',
        'bump:master'
    ],
    // Task for updating the cached npm packages used by the Travis build (which are controlled by test-infra/npm-shrinkwrap.json).
    // This task should be run and the updated file should be committed whenever GrowCss's dependencies change.
    'update': [
      'exec:npmUpdate',
      'shrinkwrap'
    ]
};
