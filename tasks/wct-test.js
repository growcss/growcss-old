'use strict';
//web-component-tester config

module.exports = {
  local: {
    options: {remote: false},
  },
  remote: {
    options: {remote: true},
  },
  chrome: {
    options: {browsers: ['chrome']},
  },
};
