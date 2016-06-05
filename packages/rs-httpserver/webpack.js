const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../../scripts/webpack.config.js');

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
  contentBase: '../../dist/index.html',
  hot: true
});

server.listen(3000);
