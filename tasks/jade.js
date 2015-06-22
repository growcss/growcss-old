'use strict';
//jade config

var placeholdit = function (width, height, placeholder) {
    var place = (placeholder) ? placeholder : width + '%C3%97' + height;

    return 'https://placeholdit.imgix.net/~text?txtsize=47&txt=' + place + '&w=' + width + '&h=' + height;
};

module.exports = {
    dev: {
        options: {
            data: {
                placeholdit: placeholdit
            },
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
            data: {
                placeholdit: placeholdit
            },
            pretty: true
        },
        files: [{
            cwd: 'src/jade/fixtures',
            expand: true,
            src: '**/*.jade',
            dest: 'tests/fixtures',
            ext: '.html'
        }]
    },
    release: {
        options: {
            data: {
                placeholdit: placeholdit
            },
            pretty: true,
        },
        files: [{
            cwd: 'src/jade',
            expand: true,
            src: '*.jade',
            dest: 'release',
            ext: '.html'
        }]
    }
};
