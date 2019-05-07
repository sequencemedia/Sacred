module.exports = {
  'compact': true,
  'comments': false,
  'presets': [
    [
      '@babel/env', {
        useBuiltIns: 'entry',
        targets: {
          node: 'current',
          'browsers': [
            'last 4 versions'
          ]
        },
        corejs: '3.0.1'
      }
    ]
  ]
}
