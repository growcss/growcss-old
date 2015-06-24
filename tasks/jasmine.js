'use strict';
//jasmine config

module.exports = {
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
            ],
            vendor: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/fastclick/lib/fastclick.js'
            ]
        }
    }
};
