'use strict';
//watch config

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
        tasks: ['eslint', 'jscs', 'jshint', 'uglify'],
        options: {
            spawn: false
        }
    },
    stylus: {
      files: ['src/stylus/**/*.styl'],
      tasks: ['stylint', 'stylus'],
      options: {
          spawn: false
      }
    }
};
