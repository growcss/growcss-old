'use strict';
//uglify config

module.exports = {
    dev: {
        options:
        {
            sourceMap: true,
            compress: {
                loops: true,
                if_return: true
                //drop_console: true
            }
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
    docs: {
        options:
        {
            sourceMap: true,
            compress: {
                loops: true,
                if_return: true
                //drop_console: true
            }
        },
        files: {
            'build/js/docs.js' : [
                'src/js/docs/docs.Editor.js',
                'src/js/docs.js'
            ],
        }
    },
    // ie: {
    //     options:
    //     {
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
