'use strict';
//uglify config

module.exports = {
    dev: {
        options: {
            sourceMap: true,
            compress: {
                loops: true,
                if_return: true
            },
            expand: true
        },
        files: {
            'build/js/growcss.js' : [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/fastclick/lib/fastclick.js',
                'src/vendor/fotorama-4.6.3/fotorama.js',
                'src/js/ui/well/ui.Well.js',
                'src/js/growcss.js'
            ],
        }
    },
    release: {
        options: {
            sourceMap: true,
            compress: {
                loops: true,
                if_return: true,
                drop_console: true
            }
        },
        files: {
            'release/js/growcss.min.js' : [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/fastclick/lib/fastclick.js',
                'src/vendor/fotorama-4.6.3/fotorama.js',
                'src/js/ui/well/ui.Well.js',
                'src/js/growcss.min.js'
            ],
        }
    }
    // ie: {
    //     options: {
    //         sourceMap: true,
    //         compress: {
    //             loops: true,
    //             if_return: true
    //             //drop_console: true
    //         }
    //     },
    //     files: {
    //         'build/js/growcss-ie.js' : [
    //             ''
    //         ],
    //     }
    // }
};
