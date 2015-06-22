'use strict';
//jsvalidate config

var scss = [
    'bower_components/bourbon/app/assets/stylesheets/',
    'bower_components/bitters/app/assets/stylesheets/',
    'bower_components/neat/app/assets/stylesheets/',
    'bower_components/crossass-config/scss',
    'bower_components/quantum-colors'
];

module.exports = {
    precompiled: {
        options: {
            loadPath: scss,
            bundleExec: true
        },
        files: {
            'precompiled/css/growcss.css': 'src/scss/growcss.scss',
        }
    },
    dev: {
        options: {
            loadPath: scss,
            bundleExec: true
        },
        files: {
            'build/css/growcss.css': 'src/scss/growcss.scss',
        }
    },
    test: {
        options: {
            loadPath: scss,
            bundleExec: true,
            style: 'expanded',
        },
        files: {
            'tests/src/css/results.css': 'tests/src/scss/tests.scss',
        }
    }
};
