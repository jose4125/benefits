var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var mapError = require('./maperror');
var config = require('../gulp.config')();

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = config.scripts.dependencies;
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function() {
  bundleApp(false);
});

gulp.task('scripts:build', function() {
  bundleApp(true);
});

function bundleApp(isProduction) {
  scriptsCount++;
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  var appBundler = browserify({
    entries: config.entry,
    extensions: config.scripts.extensions,
    debug: false
  });

  // If it's not for production, a separate vendors.js file will be created
  // the first time gulp is run so that we don't have to rebundle things like
  // react everytime there's a chang<e in the js file
  if (!isProduction && scriptsCount === 1) {
    // create vendors.js for dev environment.
    browserify({
      require: dependencies,
    })
      .bundle()
      .on('error', mapError)
      .pipe(source(config.scripts.dependenciesSource))
      .pipe(gulp.dest(config.scripts.dist));
  }
  if (!isProduction) {
    // make the dependencies external so they dont get bundled by the
    // app bundler. Dependencies are already bundled in vendor.js for
    // development environments.
    dependencies.forEach(function(dep) {
      appBundler.external(dep);
    });
  }

  appBundler
    // transform ES6 and JSX to ES5 with babelify
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', $.notify.onError({
        message: 'Error: <%= error.message %>',
        sound: 'frog'
      }))
    .on('error', mapError)
    .pipe(source(config.scripts.scriptsSource))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sourcemaps.write(config.scripts.map))
    .pipe(gulp.dest(config.scripts.dist))
    .pipe($.notify({
      message: 'Generated file: ' + config.scripts.scriptsSource,
    }));
}
