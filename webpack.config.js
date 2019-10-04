module.exports = (env, { mode }) => {
  // console.log(argv)
  if (mode === "production") {
    return require("./configs/webpack.prod.js");
  }

  return require("./configs/webpack.dev.js");
};
