const isDevServer = process.env.WEBPACK_DEV_SERVER;

module.exports = (env, { mode }) => {
  // console.log(argv)
  if (mode === 'production') {
    return require('./configs/webpack.prod.js');
  }

  return require('./configs/webpack.dev.js');
}
