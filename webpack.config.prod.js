const path = require('path')
const webpack = require('webpack')
const PluginCopy = require('copy-webpack-plugin')
const PluginHtml = require('html-webpack-plugin')
const PluginCss = require('mini-css-extract-plugin')
const PluginOffline = require('offline-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
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
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(false),
      PRODUCTION: JSON.stringify(true)
    }),
    new PluginCss(),
    new PluginCopy([
      'src/_redirects'
    ]),
    new PluginHtml({
      minify: true,
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new PluginOffline()
  ]
}
