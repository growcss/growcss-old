'use strict';
//uglify config

module.exports = {
    dev: {
        options: {
            sourceMap: true,
            compress: {
                loops: true,
                if_return: true
                //drop_console: true
            }
        },
        files: {
            'build/js/growcss.js' : [
                'src/js/ui/well/uiWell.js'
            ],
        }
    },
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
