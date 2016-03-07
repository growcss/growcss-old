'use strict';
// bump config

module.exports = {
  sample: {
    options: {
      partials: {
        features: '{{#each features}}{{> feature}}{{/each}}',
        feature: '[NEW] {{this}}\n',
        fixes: '{{#each fixes}}{{> fix}}{{/each}}',
        fix: '[FIX] {{this}}\n'
      }
    }
  }
};
