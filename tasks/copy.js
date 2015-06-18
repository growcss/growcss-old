'use strict';
//copy config

module.exports = {
    normalize: {
        files: [{
            expand: true,
            cwd: 'bower_components/normalize.css/',
            src: '**/*.css',
            dest: 'src/scss/',
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
    prismJs: {
        files: [{
            expand: true,
            cwd: 'bower_components/prism/',
            src: 'prism.js',
            dest: 'build/js/'
        }]
    },
    prismCss: {
        files: [{
            expand: true,
            cwd: 'bower_components/prism/themes/',
            src: '*-okaidia.css',
            dest: 'build/css/'
        }]
    },
    fontAwesome: {
        files: [{
            expand: true,
            cwd: 'bower_components/font-awesome/fonts',
            src: '*',
            dest: 'build/fonts/'
        }]
    },
};
