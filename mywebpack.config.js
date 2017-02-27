var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    '#{__dirname}/../client/index.coffee'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:3000/scripts/'
    filename: 'qraynix.bundle.js',
  },
};
