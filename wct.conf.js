var path = require('path');

var ret = {
  'suites': ['!testing/components/growcss-style', 'testing/components/**/test', 'testing/behaviors/**/test'],
  'webserver': {
    'pathMappings': []
  }
};

var mapping = {};
var rootPath = (__dirname).split(path.sep).slice(-1)[0];

mapping['/components/' + rootPath + '/bower_components'] = 'bower_components';

ret.webserver.pathMappings.push(mapping);

module.exports = ret;
