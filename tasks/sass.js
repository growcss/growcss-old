'use strict';
//jsvalidate config

module.exports = {
    sass: {
        options: {
            loadPath: [
                'bower_components/bourbon/app/assets/stylesheets/',
                'bower_components/bitters/app/assets/stylesheets/',
                'bower_components/neat/app/assets/stylesheets/',
                'bower_components/font-awesome/scss',
                'bower_components/quantum-colors'
            ],
            bundleExec: true
        },
        files: {
            'build/css/growcss.css': 'src/scss/growcss.scss',
        }
    },
    docs: {
        options: {
            loadPath: [
                'bower_components/bourbon/app/assets/stylesheets/',
                'bower_components/bitters/app/assets/stylesheets/',
                'bower_components/neat/app/assets/stylesheets/',
                'bower_components/font-awesome/scss',
                'bower_components/quantum-colors'
            ],
            bundleExec: true
        },
        files: {
            'build/css/docs.css': 'src/scss/docs.scss',
        }
    },
    test: {
        options: {
            loadPath: [
                'bower_components/bootcamp/dist',
                'bower_components/bourbon/app/assets/stylesheets/',
                'bower_components/bitters/app/assets/stylesheets/',
                'bower_components/neat/app/assets/stylesheets/',
                'bower_components/font-awesome/scss',
                'bower_components/quantum-colors'
            ],
            bundleExec: true,
            style: 'expanded',
        },
        files: {
            'build/css/results.css': 'tests/src/scss/tests.scss',
        }
    }
};
