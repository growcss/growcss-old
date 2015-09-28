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
        'bump'
    ]
};
