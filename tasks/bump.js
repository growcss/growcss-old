'use strict';
// bump config

module.exports = {
  pre: {
    options: {
      files: ['package.json', 'bower.json'],
      updateConfigs: [],
      commit: false,
      createTag: false,
      push: false,
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
      globalReplace: false,
      prereleaseName: true,
      regExp: false
    }
  },
  master: {
    options: {
      files: ['package.json', 'bower.json'],
      updateConfigs: [],
      commit: false,
      createTag: false,
      push: false,
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
    }
  }
};
