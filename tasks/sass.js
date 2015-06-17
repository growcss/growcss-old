'use strict';
//jsvalidate config

module.exports = {
    sass: {
        options: {
            loadPath: [
                'bower_components/bourbon/app/assets/stylesheets/',
                'bower_components/bitters/app/assets/stylesheets/',
                'bower_components/neat/app/assets/stylesheets/',
                'bower_components/quantum-colors'
            ],
            bundleExec: true
        },
        files: {
            'build/css/growcss.css': 'src/scss/growcss.scss',
        }
    }
};
