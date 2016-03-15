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
  'cookies': {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/cookies-js/dist/cookies.min.js',
    dest: 'precompiled/cookies-behavior/assets/cookies.js'
  },
  'event': {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/eventEmitter/EventEmitter.min.js',
    dest: 'precompiled/event-emitter-behavior/assets/event-emitter.js'
  },
  'video': {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/jsVideoUrlParser/dist/jsVideoUrlParser.js',
    dest: 'precompiled/video-url-parser-behavior/assets/video-url-parser.js'
  },
  'hash': {
    expand: false,
    flatten: true,
    filter: 'isFile',
    src: 'bower_components/JavaScript-MD5/js/md5.js',
    dest: 'precompiled/gc-ui-avatar/assets/md5.js'
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
