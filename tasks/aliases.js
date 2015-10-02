module.exports = {
    'cs-test': [
        'jsonlint',
        'jscs',
        'jshint',
    ],
    'test': [
        'cs-test',
        'karma'
    ],
    'default': [
        'cs-test',
        'clean:dev',
        'uglify:dev',
        'jade:dev',
    ],
    'build': [
        'cs-test',
        'clean:release',
        'uglify:release',
        'jade:release',
        'clean:precompiled',
        'bump:master'
    ],
    // Task for updating the cached npm packages used by the Travis build (which are controlled by test-infra/npm-shrinkwrap.json).
    // This task should be run and the updated file should be committed whenever GrowCss's dependencies change.
    'update': [
      'exec:npmUpdate',
      'shrinkwrap'
    ]
};
