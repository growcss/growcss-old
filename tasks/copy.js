'use strict';
// copy config

module.exports = {
  normalize: {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/normalize-css/normalize.css',
    dest: 'src/components/growcss-style/assets/normalize.css'
  },
  cookies: {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/cookies-js/dist/cookies.min.js',
    dest: 'precompiled/cookies-behavior/assets/cookies.js'
  },
  event: {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/eventEmitter/EventEmitter.min.js',
    dest: 'precompiled/event-emitter-behavior/assets/event-emitter.js'
  },
  parallax: {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/scroll-parallax/dist/Parallax.js',
    dest: 'precompiled/parallax-scroller-behavior/assets/parallax.js'
  },
  components: {
    files: [{
      expand: true,
      filter: 'isFile',
      cwd: 'src/components/',
      src: ['**/*.json', '**/*.md'],
      dest: 'release/components/'
    }]
  },
  behaviors: {
    files: [{
      expand: true,
      filter: 'isFile',
      cwd: 'src/behaviors/',
      src: ['**/*.json', '**/*.md'],
      dest: 'release/behaviors/'
    }]
  }
};
