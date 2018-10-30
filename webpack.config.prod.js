const path = require('path')
const stylish = require('webpack-stylish')
const copy = require('copy-webpack-plugin')
const html = require('html-webpack-plugin')
const clean = require('clean-webpack-plugin')
const css = require('mini-css-extract-plugin')
const webapp = require('webapp-webpack-plugin')
const workbox = require('workbox-webpack-plugin')
const typecheck = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  entry: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name]-[contenthash].bundle.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new stylish(),
    new clean(['build']),
    new copy(['public']),
    new css(),
    new html({
      meta: { description: 'The portfolio site about ymkz.' },
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'YMKZ | Portfolio'
    }),
    new webapp({
      logo: path.resolve(__dirname, 'resource/icon.jpg'),
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
      reportFiles: ['src/**/*.{ts,tsx}']
    }),
    new workbox.GenerateSW()
  ]
}
