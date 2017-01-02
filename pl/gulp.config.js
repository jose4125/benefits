module.exports = function() {
  var root = './';
  var gulpTask = './gulp/';
  var app = './src/';
  var dist = './public/';
  var server = './server/index.js';
  var entryJsx = app + 'scripts/app.jsx';
  var entryScss = app + 'styles/main.scss';

  var config = {
    root: root,
    app: app,
    entry: entryJsx,
    entryScss: entryScss,
    dist: dist,
    server: server,
    index: app + 'index.html',
    scripts: {
      js: app + 'scripts/**/*.jsx',
      dev: dist + 'scripts/',
      dist: dist + 'scripts/',
      map: './map',
      dependencies: [
        'react',
        'react-dom'
      ],
      extensions: ['.jsx'],
      dependenciesSource: 'vendor.js',
      scriptsSource: 'bundle.js'
    },
    styles: {
      scss: app + 'styles/**/*.scss',
      dev: dist + 'styles/',
      dist: dist + 'styles/',
      map: './map',

    }
  };
  return config;
};
