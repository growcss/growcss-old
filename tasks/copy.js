'use strict';
//copy config

module.exports = {
    remIe: {
        files: [{
            expand: true,
            cwd: 'bower_components/REM-unit-polyfill/js/',
            src: '*.min.js',
            dest: 'build/js/'
        }]
    },
    releaseRemIe: {
        files: [{
            expand: true,
            cwd: 'bower_components/REM-unit-polyfill/js/',
            src: '*.min.js',
            dest: 'release/js/'
        }]
    }
};
