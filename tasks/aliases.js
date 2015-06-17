module.exports = {
    'dev:test' : [
        'newer:jsonlint:dev',
        //'newer:jshint:dev',
        'newer:jsvalidate:dev'
    ],
    'default': [
        'newer:jsonlint',
        'newer:jshint',
        'newer:copy',
        'clean',
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
