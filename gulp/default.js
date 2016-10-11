var gulp = require('gulp');

gulp.task('default', ['scripts', 'styles', 'copy:index', 'server', 'watch']);
