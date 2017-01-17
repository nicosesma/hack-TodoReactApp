const webpack = require('webpack')
const jsonLoader = require('json-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root = __dirname

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  inject: true,
  template: root + '/client/index.html',
  filename: 'index.html',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
})

const babelConfig = {
  babelrc: true,
  presets: [ 'es2015', 'react' ]
}

module.exports = {
  context: root + '/client',
  entry: [ root + '/client/main.js' ],
  output: {
    path: root + '/public/dist',
    pathinfo: true,
    filename: 'browser.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        include: [ root + '/client' ],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: babelConfig
      },
      {
        test: /\.json$/,
        loader: [ 'json-loader' ]
      }
    ]
  },
  plugins: [ HtmlWebpackPluginConfig ]
}
