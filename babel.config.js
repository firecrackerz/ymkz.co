module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    process.env.NODE_ENV !== 'test' && 'styled-components',
    [
      'module-resolver',
      {
        alias: {
          root: ['./'],
          src: './src'
        }
      }
    ]
  ].filter(Boolean)
}
