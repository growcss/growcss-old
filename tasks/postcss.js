'use strict';
//postcss config

module.exports = {
  options: {
    map: false, // inline sourcemaps

    processors: [
      require('autoprefixer')({
        browsers: [
          'ie >= 10',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 4.4',
          'bb >= 10'
        ]
      }),
      require('postcss-pxtorem')({
        propWhiteList: [
          'font',
          'font-size',
          'line-height',
          'letter-spacing',
          'margin',
          'margin-left',
          'margin-right',
          'margin-top',
          'margin-bottom',
          'padding',
          'padding-left',
          'padding-right',
          'padding-top',
          'padding-bottom',
        ],
      }),
      require('postcss-at2x')(),
      require("postcss-import")(),
      require('postcss-font-normalize')(),
      require('postcss-flexbugs-fixes')(),
      require('postcss-simple-vars')({
        variables: {
          // screens
          '$small-up': 'only screen',
          // max-width 640px, mobile-only styles, use when QAing mobile issues
          '$small-only': 'only screen and (max-width: 40em)',
          // min-width 641px, tablet screens
          '$medium-up': 'only screen and (min-width: 40.063em)',
          // min-width 641px and max-width 1024px, use when QAing tablet-only issues
          '$medium-only': 'only screen and (min-width: 40.063em) and (max-width: 64em)',
          // min-width 1025px, large screens
          '$large-up': 'only screen and (min-width: 64.063em)',
          // min-width 1024px and max-width 1200px, use when QAing large screen-only issues
          '$large-only': 'only screen and (min-width: 64.063em) and (max-width: 75em)',
          // min-width 1201px, xlarge screens
          '$xlarge-up': 'only screen and (min-width: 75.0625em)',
          // min-width 1201px and max-width 1440, use when QAing xlarge screen-only issues
          '$xlarge-only': 'only screen and (min-width: 75.0625em) and (max-width: 90em)',
          // min-width 1441px, xlarge screens
          '$xxlarge-up': 'only screen and (min-width: 90.063em)',
          // min-width 1441px and max-width 1920px, use when QAing xlarge screen-only issues
          '$xxlarge-only': 'only screen and (min-width: 90.063em) and (max-width: 120em)',
          // Portrait
          '$portrait': 'screen and (orientation:portrait)',
          // Landscape
          '$landscape': 'screen and (orientation:landscape)',
          // Retina
          '$retina': 'only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min$moz-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5)',
          // foundation column gutter
          '$column-gutter-small': '0.6825rem',
          '$column-gutter-medium': '0.9375rem',
          // use these for margins and paddings
          '$margin-mini': '0.3125rem',
          '$margin-xsmall': '0.625rem',
          '$margin-small': '1.25rem',
          '$margin-default': '2.5rem',
          '$margin-large': '5rem',
          '$margin-xlarge': '7.5rem',
        }
      }),
      require("css-mqpacker")(),
      require('css-declaration-sorter')({
        order: 'smacss'
      }),
      require('colorguard')(),
      require('cssnano')(),
      require('postcss-reporter')(),
    ]
  },
  'precompiled': {
    files: [{
        expand: true,
        cwd: 'src/components/',
        src: ['**/assets/*.css'],
        dest: 'precompiled/'
    }]
  },
  'precompiled-shared': {
    files: [{
        expand: true,
        cwd: 'src/shared/',
        src: ['**/*.css'],
        dest: 'precompiled/shared/'
    }]
  }
}
