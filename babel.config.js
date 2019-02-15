module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [
      ['next/babel', { 'preset-env': { useBuiltIns: 'entry' } }],
      ['@zeit/next-typescript/babel']
    ],
    plugins: [['emotion']]
  }
}
