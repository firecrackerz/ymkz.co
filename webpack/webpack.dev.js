const path = require('path')
const html = require('html-webpack-plugin')
const notifier = require('webpack-build-notifier')
const typecheck = require('fork-ts-checker-webpack-plugin')

const __rootdir = process.cwd()

module.exports = {
  mode: 'development',
  devtool: '#eval-cheap-module-source-map',
  entry: path.resolve(__rootdir, 'src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__rootdir, 'dist'),
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
        test: /\.(png|jpg|jpeg|gif|svg|ttf|otf|woff)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new html({
      meta: { description: 'The portfolio site about ymkz.' },
      template: path.resolve(__rootdir, 'src/index.html'),
      title: 'YMKZ | Portfolio'
    }),
    new typecheck({
      reportFiles: ['src/**/*.{ts,tsx}'],
      tslint: true
    }),
    new notifier({
      suppressSuccess: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__rootdir, 'public'),
    historyApiFallback: true,
    open: true,
    stats: 'errors-only'
  }
}
