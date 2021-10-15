module.exports = {
  plugins: [
    ['postcss-import', {
      addModulesDirectories: [
        'styles'
      ]
    }],
    ['postcss-preset-env', {
      stage: 1,
      features: {
        'nesting-rules': true
      }
    }]
  ]
}
