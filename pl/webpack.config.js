const path = require('path')

const config = {
  entry: './src/index.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
}

module.exports = config
