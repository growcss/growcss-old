'use strict';
// copy config

module.exports = {
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
