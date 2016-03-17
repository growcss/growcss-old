'use strict';
// bump config

module.exports = {
  pre: {
    options: {
      files: ['package.json', 'bower.json'],
      commit: false,
      createTag: false,
      commitMessage: 'pre-release: v%VERSION%',
      commitFiles: ['package.json', 'bower.json'],
      push: false,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: false,
      prereleaseName: true,
    }
  },
  master: {
    options: {
      files: ['package.json', 'bower.json'],
      commit: false,
      createTag: false,
      commitMessage: 'release: v%VERSION%',
      commitFiles: ['package.json', 'bower.json'],
      push: false,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: false,
    }
  }
};
