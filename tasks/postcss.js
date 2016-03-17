'use strict';
// postcss config

module.exports = {
  options: {
    map: false, // inline sourcemaps

    processors: [
      require('stylelint')({}),
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
          'top',
          'left',
          'right',
          'bottom'
        ]
      }),
      require('postcss-at2x')(),
      require('postcss-font-normalize')(),
      require('postcss-flexbugs-fixes')(),
      require('postcss-simple-vars')({
        variables: {
          // screens
          '$xsmall-up': 'only screen',
          // max-width 480px, tiny mobile-only styles, use when QAing mobile issues
          '$xsmall-only': 'only screen and (max-width: 30em)',
          // min-width 961px, mobile screens
          '$small-up': 'only screen and (min-width: 60.0625em)',
          // min-width 481px and max-width 960px, mobile-only styles, use when QAing mobile issues
          '$small-only': 'only screen and (min-width: 30.0625em) and (max-width: 60em)',
          // min-width 1281px, tablet screens
          '$medium-up': 'only screen and (min-width: 80.0625em)',
          // min-width 961px and max-width 1280px, use when QAing tablet-only issues
          '$medium-only': 'only screen and (min-width: 60.0625em) and (max-width: 80em)',
          // min-width 1601px, large screens
          '$large-up': 'only screen and (min-width: 100.0625em)',
          // min-width 1281px and max-width 1600px, use when QAing large screen-only issues
          '$large-only': 'only screen and (min-width: 80.0625em) and (max-width: 100em)',
          // min-width 1921px, xlarge screens
          '$xlarge-up': 'only screen and (min-width: 120.0625em)',
          // min-width 1600px and max-width 1920, use when QAing xlarge screen-only issues
          '$xlarge-only': 'only screen and (min-width: 100.0625em) and (max-width: 120em)',
          // Portrait
          '$portrait': 'screen and (orientation:portrait)',
          // Landscape
          '$landscape': 'screen and (orientation:landscape)',
          // Retina
          '$retina': 'only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min$moz-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5)',
          // foundation column gutter
          '$column-gutter-xsmall': '0.75rem',
          '$column-gutter-small': '1.5rem',
          '$column-gutter-medium': '2.25rem',
          '$column-gutter-large': '3rem',
          '$column-gutter-xlarge': '3.75rem',
          // use these for margins and paddings
          '$margin-xsmall': '0.75rem',
          '$margin-small': '1.5rem',
          '$margin-default': '2.5rem',
          '$margin-large': '3rem',
          '$margin-xlarge': '3.75rem'
        }
      }),
      require('css-mqpacker')(),
      require('postcss-reporter')({
        clearMessages: true
      })
    ]
  },
  'precompiled': {
    files: [{
      expand: true,
      cwd: 'src/components/',
      src: ['**/assets/**/*.css'],
      dest: 'precompiled/'
    }]
  },
  'precompiled-shared': {
    files: [{
      expand: true,
      cwd: 'src/shared/',
      src: ['**/**/*.css'],
      dest: 'precompiled/shared/'
    }]
  }
}
