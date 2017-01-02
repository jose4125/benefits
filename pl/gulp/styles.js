var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var mapError = require('./mapError');

gulp.task('styles', function() {
  return gulp.src(config.entryScss)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .on('error', $.notify.onError({
        message: 'Error: <%= error.message %>',
        sound: 'frog'
      }))
    .on('error', mapError)
    .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe($.sourcemaps.write(config.styles.map))
    .pipe(gulp.dest(config.styles.dist))
    .pipe($.notify({
      message: 'Generated file: main.css'
    }));
});
