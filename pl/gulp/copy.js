var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../gulp.config')();

gulp.task('copy:index', function() {
  return gulp.src(config.index)
    .pipe(gulp.dest(config.dist));
});
