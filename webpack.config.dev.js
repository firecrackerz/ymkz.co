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

function exist(file) {
  try {
    fs.accessSync(file)
    return true
  } catch (err) {
    return false
  }
}

const serve = {
  add: app => app.use(convert(history())),
  content: [__dirname],
  dev: { stats: 'none' }
}

const https = {
  key: './localhost-key.pem',
  cert: './localhost.pem'
}

if (exist(https.key) || exist(https.cert)) {
  serve.https = {
    key: fs.readFileSync(https.key),
    cert: fs.readFileSync(https.cert),
  }
}

module.exports.serve = serve
