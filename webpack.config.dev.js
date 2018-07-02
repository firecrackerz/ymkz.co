const fs = require('fs')
const path = require('path')
const PluginStylish = require('webpack-stylish')
const PluginHtml = require('html-webpack-plugin')
const PluginCss = require('mini-css-extract-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports = {
  mode: 'development',
  stats: 'none',
  devtool: 'eval-cheap-module-source-map',
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
        use: [{ loader: PluginCss.loader }, 'css-loader']
      },
      {
        test: /\.(png|jpg|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new PluginStylish(),
    new PluginCss(),
    new PluginHtml({
      minify: true,
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}

module.exports.serve = {
  add: app => app.use(convert(history())),
  content: [__dirname],
  dev: {
    stats: 'none'
  },
  https: {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
  }
}
