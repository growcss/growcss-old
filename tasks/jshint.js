'use strict';
//jshint config

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    dev: [
        'Gruntfile.js',
        'src/*.js',
        'test/*.js'
    ]
};