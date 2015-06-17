module.exports = {
    'dev:test' : [
        'newer:jsonlint:dev',
        //'newer:jshint:dev',
        'newer:jsvalidate:dev'
    ],
    'default': [
        'newer:jsonlint',
        'newer:jshint',
        'clean',
        'newer:copy',
        'uglify',
        'sass',
        'jade'
    ],
    'build': [
        'lint',
        'clean',
        'sass',
        'jade',
        'bump'
    ]
};
