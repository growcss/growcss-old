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
};
