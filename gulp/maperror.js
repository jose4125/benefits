var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var chalk = require('chalk');

function mapError(error) {
  if (error.fileName) {
    // Regular error
    $.util.log(chalk.red(error.name)
      + ': ' + chalk.yellow(error.fileName.replace(__dirname + '/src/scripts/', ''))
      + ': ' + 'Line ' + chalk.magenta(error.lineNumber)
      + ' & ' + 'Column ' + chalk.magenta(error.columnNumber || error.column)
      + ': ' + chalk.blue(error.description));
  } else {
    // Browserify error..
    $.util.log(chalk.red(error.name)
      + ': '
      + chalk.yellow(error.message));

    return error.message;
  }
}

module.exports = mapError;
