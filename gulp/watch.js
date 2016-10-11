var gulp = require('gulp');
var config = require('../gulp.config')();
gulp.task('watch', function() {
  gulp.watch([config.scripts.js], ['scripts']);
  gulp.watch([config.styles.scss], ['styles']);
  gulp.watch([config.index], ['copy:index']);
});
