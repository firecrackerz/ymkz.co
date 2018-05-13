const path = require('path')
const Html = require('html-webpack-plugin')
const Copy = require('copy-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const Favicons = require('favicons-webpack-plugin')
const Extract = require('extract-text-webpack-plugin')
const Workbox = require('workbox-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src')],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: Extract.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|svg|woff)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new Clean('build'),
    new Extract('index.css'),
    new Favicons('./assets/avatar.jpg'),
    new Copy(['public']),
    new Html({
      template: 'src/index.html',
      minify: true
    }),
    new Workbox.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
