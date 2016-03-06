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
