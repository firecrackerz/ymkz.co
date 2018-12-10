module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    env: {
      production: {
        plugins: [['emotion']]
      },
      development: {
        plugins: [['emotion', { sourceMap: true }]]
      }
    },
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread'],
      ['@babel/plugin-proposal-class-properties'],
      ['@babel/plugin-syntax-dynamic-import'],
      ['module-resolver', { root: ['./'], alias: { src: './src' } }]
    ]
  }
}
