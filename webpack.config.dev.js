const path = require('path')
const stylish = require('webpack-stylish')
const html = require('html-webpack-plugin')
const css = require('mini-css-extract-plugin')
const notifier = require('webpack-build-notifier')
const typecheck = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: '#eval-cheap-module-source-map',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [css.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|otf|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new stylish(),
    new css(),
    new html({
      meta: { description: 'The portfolio site about ymkz.' },
      template: path.resolve(__dirname, 'src/index.html'),
      title: '[DEV] YMKZ | Portfolio'
    }),
    new typecheck({
      reportFiles: ['src/**/*.{ts,tsx}']
    }),
    new notifier({
      suppressSuccess: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    stats: 'errors-only'
  }
}
