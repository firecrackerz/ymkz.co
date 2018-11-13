const path = require('path')
const stylish = require('webpack-stylish')
const html = require('html-webpack-plugin')
const clean = require('clean-webpack-plugin')
const webapp = require('webapp-webpack-plugin')
const workbox = require('workbox-webpack-plugin')
const typecheck = require('fork-ts-checker-webpack-plugin')
const pkg = require('../package.json')

const __rootdir = process.cwd()

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  entry: path.resolve(__rootdir, 'src'),
  output: {
    filename: '[name]-[contenthash].bundle.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new stylish(),
    new clean([path.resolve(__rootdir, 'dist')], { root: path.resolve(__rootdir) }),
    new html({
      meta: { description: pkg.app.description },
      template: path.resolve(__rootdir, 'src/index.html'),
      title: `${pkg.app.title}`
    }),
    new webapp({
      logo: path.resolve(__rootdir, 'resource/icon.jpg'),
      favicons: {
        lang: 'ja',
        background: '#2e3440',
        theme_color: '#2e3440',
        icons: {
          coast: false,
          yandex: false
        }
      }
    }),
    new typecheck({
      reportFiles: ['src/**/*.{ts,tsx}'],
      tslint: true
    }),
    new workbox.GenerateSW()
  ]
}
