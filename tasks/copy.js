'use strict';
//copy config

module.exports = {
    normalize: {
        files: [{
            expand: true,
            cwd: 'bower_components/normalize.css/',
            src: '**/*.css',
            dest: 'src/scss/vendors/',
            rename: function(dest, src) {
                return dest + src.replace(/\.css$/, ".scss");
            }
        }]
    },
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
