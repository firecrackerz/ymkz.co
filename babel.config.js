module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    env: {
      production: {
        plugins: [['emotion', { hoist: true }]]
      },
      development: {
        plugins: [['emotion', { sourceMap: true, autoLabel: true }]]
      },
      test: {
        plugins: [['emotion', { sourceMap: true, autoLabel: true }]]
      }
    },
    presets: [
      ['@babel/preset-env', { useBuiltIns: 'usage' }],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      [
        'module-resolver',
        {
          alias: {
            root: ['./'],
            src: './src'
          }
        }
      ]
    ]
  }
}
