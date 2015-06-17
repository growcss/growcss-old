'use strict';
//jade config

module.exports = {
    dist: {
        options: {
            pretty: true,
        },
        files: [{
            cwd: 'src/jade',
            expand: true,
            src: '*.jade',
            dest: 'build',
            ext: '.html'
        }]
    },

    fixtures: {
        options: {
            pretty: true
        },
        files: [{
            cwd: 'src/jade/fixtures',
            expand: true,
            src: '**/*.jade',
            dest: 'tests/fixtures',
            ext: '.html'
        }]
    }
};
