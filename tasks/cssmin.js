'use strict';
//cssmin config

module.exports = {
    precompiled: {
        files: [{
            expand: true,
            cwd: 'precompiled/css',
            src: ['*.css', '!*.min.css'],
            dest: 'build/css',
            ext: '.min.css'
        }]
    }
};
