module.exports = {
  "presets": [
    // [
      "@babel/preset-env",
    //   {
    //     "targets": {
    //       "browsers": [
    //         "last 2 versions"
    //       ]
    //     },
    //     "corejs": 3,
    //     "useBuiltIns": "entry"
    //   }
    // ],
    "@babel/typescript"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}