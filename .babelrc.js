module.exports = {
  presets: ["@babel/typescript", "@babel/preset-env"],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true
      }
    ],
    "@babel/proposal-class-properties"
  ]
};
