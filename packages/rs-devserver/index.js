const webpack = require('webpack');

function invalidateBundle() {

}

function updateStats() {
    
}

function server(options) {
  const compiler = webpack(options);
  ['compile', 'invalid'].map(a => compiler.plugin(a, invalidateBundle));
  compiler.plugin('done', updateStats)
}
