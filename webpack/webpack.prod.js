const path = require('path')
const zopfli = require('@gfx/zopfli')
const html = require('html-webpack-plugin')
const copy = require('copy-webpack-plugin')
const clean = require('clean-webpack-plugin')
const webapp = require('webapp-webpack-plugin')
const workbox = require('workbox-webpack-plugin')
const compression = require('compression-webpack-plugin')
const typecheck = require('fork-ts-checker-webpack-plugin')

const __rootdir = process.cwd()

module.exports = {
  mode: 'production',
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
    new clean([path.resolve(__rootdir, 'dist')], { root: path.resolve(__rootdir) }),
    new copy([path.resolve(__rootdir, 'public')]),
    new workbox.GenerateSW(),
    new html({
      meta: { description: 'The portfolio site about ymkz.' },
      template: path.resolve(__rootdir, 'src/index.html'),
      title: 'YMKZ | Portfolio'
    }),
    new webapp({
      logo: path.resolve(__rootdir, 'resource/icon.jpg'),
      favicons: {
        lang: 'ja',
        background: '#2e3440',
        theme_color: '#2e3440',
        icons: { coast: false, yandex: false }
      }
    }),
    new typecheck({
      reportFiles: ['src/**/*.{ts,tsx}'],
      tslint: true
    }),
    new compression({
      exclude: /service-worker/,
      compressionOptions: {
        numiterations: 15
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback)
      }
    })
  ]
}
