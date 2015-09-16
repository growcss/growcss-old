module.exports = {
    'cs-test' : [
        'jsonlint',
        'jscs',
        'jshint',
    ],
    'test' : [
        'cs-test',
        // 'mochacli',
        'karma'
    ],
    'default': [
        'cs-test',
        'clean:dev',
        'copy:remIe',
        'uglify:dev',
        'jade:dev',
    ],
    'build': [
        'cs-test',
        'clean:release',
        'copy:releaseRemIe',
        'uglify:release',
        'jade:release',
        'clean:precompiled',
        'bump'
    ]
};
