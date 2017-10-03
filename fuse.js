const { Sparky, FuseBox, EnvPlugin, CSSPlugin, BabelPlugin, QuantumPlugin, WebIndexPlugin } = require('fuse-box')
let production = false

Sparky.task('config', () => {
  const fuse = FuseBox.init({
    homeDir: 'src/',
    hash: production,
    target: 'browser',
    cache: !production,
    sourceMaps: !production,
    output: 'build/$name.js',
    experimentalFeatures: true,
    plugins: [
      EnvPlugin({
        NODE_ENV: production ? 'production' : 'development'
      }),
      BabelPlugin({
        presets: ['env'],
        plugins: [['transform-react-jsx']]
      }),
      CSSPlugin(),
      WebIndexPlugin({
        template: 'src/index.html',
        title: 'YMKZ'
      }),
      production &&
        QuantumPlugin({
          removeExportsInterop: false,
          treeshake: true,
          comments: false,
          manifest: true,
          minimize: true,
          mangle: true,
          uglify: true
        })
    ]
  })

  const vendor = fuse.bundle('vendor').instructions('~ index.js')
  const app = fuse.bundle('app').instructions('> [index.js]')

  if (!production) {
    fuse.dev()
    vendor.hmr()
    app.hmr().watch()
  }

  return fuse.run()
})

Sparky.task('default', ['clean', 'config', 'serve'], () => {})
Sparky.task('set-env-production', () => (production = true))
Sparky.task(
  'serve',
  () => (production ? Sparky.src('assets/**/**.*').dest('build') : Sparky.watch('assets/**/**.*').dest('build'))
)
Sparky.task('clean', () => Sparky.src('build').clean('build'))
Sparky.task('production', ['clean', 'set-env-production', 'config', 'serve'], () => {})
