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
    ]
};
