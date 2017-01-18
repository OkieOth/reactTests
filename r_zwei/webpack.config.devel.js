const webpack = require('webpack');
const common = require('./webpack.config.common');

const devConfig = Object.assign({}, common, {
  entry:   [
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    historyApiFallback: true
}
});

module.exports = devConfig;
