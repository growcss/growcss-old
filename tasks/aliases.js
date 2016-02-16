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
    // This task should be run and the updated file should be committed whenever GrowCss's dependencies change.
    'update': [
      'exec:npmUpdate'
    ]
};
