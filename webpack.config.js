const fs = require('fs')
const path = require('path')
const PluginStylish = require('webpack-stylish')
const PluginCopy = require('copy-webpack-plugin')
const PluginHtml = require('html-webpack-plugin')
const PluginExtract = require('mini-css-extract-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

const __DEV__ = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
  mode: 'development',
  stats: 'none',
  devtool: __DEV__ ? 'eval-cheap-module-source-map' : false,
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: PluginExtract.loader }, 'css-loader']
      },
      {
        test: /\.(png|jpg|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new PluginStylish(),
    new PluginExtract(),
    new PluginCopy(['src/_redirects']),
    new PluginHtml({
      minify: true,
      template: 'src/index.html'
    })
  ]
}

module.exports.serve = __DEV__ ? {
  add: app => app.use(convert(history())),
  content: [__dirname],
  dev: {
    stats: 'none'
  },
  https: {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
  }
} : {}
