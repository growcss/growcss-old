'use strict';
// conventional-changelog config

module.exports = {
  sample: {
    options: {
      logArguments: [
        '--pretty=* %h - %ad: %s',
        '--no-merges',
        '--date=short'
      ],
      template: '# GrowCss Version <%= package.version %> / {{date}}\n\n{{> features}}{{> fixes}}',
      featureRegex: /^(.*)$/gim,
      partials: {
        features: '{{#each features}}{{> feature}}{{/each}}',
        feature: '- [NEW] {{this}}\n',
        fixes: '{{#each fixes}}{{> fix}}{{/each}}',
        fix: "- [FIX] {{this}}\n"
      },
      dest: 'CHANGELOG.md'
    }
  }
};
