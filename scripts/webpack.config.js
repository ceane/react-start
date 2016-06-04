const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './packages/index'
  ],
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
    // hotUpdateChunkFilename: '__[id].[hash].hot-update.js',
    // hotUpdateMainFilename: '__[hash].hot-update.json',
    crossOriginLoading: 'anonymous',
    sourceMapFilename: '[file].map'
  },
  cache: true,
  plugins: [

  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        include: path.resolve('client'),
        loader: 'babel'
      }
    ]
  }
};
