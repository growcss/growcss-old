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
    sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
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
