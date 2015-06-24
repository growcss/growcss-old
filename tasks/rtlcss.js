'use strict';
//rtlcss config

module.exports = {
    'default':{
        options:{
            // rtlcss options
            config:{
                preserveComments: false,
                preserveDirectives: false,
                greedy: false,
                autoRename: false,
                minify: false
            },
            // generate source maps
            map: true,
            // save unmodified files
            saveUnmodified: false,
        },
        expand : true,
        cwd    : 'ltr/',
        dest   : 'rtl/',
        src    : ['**/*.css']
    }
};
