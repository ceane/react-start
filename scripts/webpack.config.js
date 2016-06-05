const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve('packages/rs-static/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      './packages/index'
    ]
  },
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        include: path.resolve('packages'),
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devtool: process.env.NODE_ENV != 'production' ? 'eval' : 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig
  ]
};
