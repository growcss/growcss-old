'use strict';
//jscs config

module.exports = {
    test: {
        src: [
            'Gruntfile.js',
            'src/**/*.js',
            'test/**/*.js'
        ],
        options: {
            config: '.jscsrc',
            fix: true
        },
    }
};
