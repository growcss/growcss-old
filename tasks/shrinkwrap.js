'use strict';
//shrinkwrap task

var npmShrinkwrap = require('npm-shrinkwrap');
var fs            = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('shrinkwrap', function () {
    var done = this.async();

    npmShrinkwrap({ dev: true, dirname: __dirname + '/..' }, function (err) {
      if (err) {
        grunt.fail.warn(err);
      }

      var dest = 'npm-shrinkwrap.json';

      fs.renameSync('npm-shrinkwrap.json', dest);

      grunt.log.writeln('File ' + dest.cyan + ' updated.');

      done();
    });
  });
};
