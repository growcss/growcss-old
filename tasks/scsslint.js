'use strict';
//scsslint config

module.exports = {
    allFiles: [
        'src/scss/**/*.scss',
    ],
    options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
        reporterOutput: null
    },
};
