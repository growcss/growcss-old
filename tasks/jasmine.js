'use strict';
//jasmine config

module.exports = {
jasmine: {
    test: {
        src: ['src/js/**/ui.*.js'],
        options: {
            outfile: 'tests/_specRunner.html',
            keepRunner: true,
            specs: [
                'tests/specs/setup.spec.js',
                'tests/src/scss/*Tests.js',
                'tests/specs/ui.*.spec.js',
            ],
            helpers: [
                'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
            ],
            styles: [
                'build/css/growcss.css'
            ]
        }
    }
 }
};
