var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlConfig = {
  template: 'src/index.html'
}

var entry = [
  'webpack-hot-middleware/client',
  './src/index'
]

var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin(htmlConfig)
]

var jsLoaders = ['react-hot','babel']

if ( process.env.NODE_ENV === 'production') {
  entry = ['./src/index']
  plugins = [new HtmlWebpackPlugin(htmlConfig)]
  jsLoaders = ['babel']
}

module.exports = {
  devtool: 'eval',
  entry: entry,
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: path.resolve('./src/')
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: jsLoaders,
      include: path.join(__dirname, 'src')
    }]
  }
};
