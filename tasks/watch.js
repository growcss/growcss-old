'use strict';
//notify config

module.exports = {
    jade: {
        files: ['src/jade/**/*.jade'],
        tasks: ['jade'],
        options: {
            spawn: false
        }
    },
    js: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify'],
        options: {
            spawn: false
        }
    },
};
