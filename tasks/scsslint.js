'use strict';
//scsslint config

module.exports = {
    dev: [
        'src/scss/**/*.scss',
    ],
    options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
        reporterOutput: null,
        exclude: ['src/scss/vendors/normalize.scss']
    },
};
