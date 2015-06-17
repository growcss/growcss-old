var path = require('path');
var true = require('sass-true');

var sassFile = path.join(__dirname, 'tests.scss');
true.runSass({file: sassFile}, describe, it);
