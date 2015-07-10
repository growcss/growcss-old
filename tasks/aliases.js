module.exports = {
    'cs-test' : [
        'jsonlint',
        'jscs',
        'jshint',
        'scsslint'
    ],
    'test' : [
        'cs-test',
        'mochacli',
        'karma'
    ],
    'default': [
        'cs-test',
        'clean:dev',
        'newer:copy:normalize',
        'copy:remIe',
        'uglify:dev',
        'sass:dev',
        'jade:dev',
    ],
    'build': [
        'cs-test',
        'clean:release',
        'copy:releaseRemIe',
        'uglify:release',
        'sass:precompiled',
        'jade:release',
        'cssmin:precompiled',
        'clean:precompiled',
        'bump'
    ]
};
