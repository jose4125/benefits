var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../gulp.config')();

gulp.task('server', function() {
  $.nodemon({
    script: config.server
    // exec: './node_modules/.bin/babel-node --presets es2015',
  })
  .on('restart', function() {
    console.log('restarted!');
  });
});
