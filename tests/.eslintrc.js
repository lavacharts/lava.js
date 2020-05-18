module.exports = {
  root: true,
  env: {
    browser: true,
    mocha: true,
    es6: true
  },
  parser: "babel-eslint",
  globals: {
    lava: true,
    LavaJs: true,
    sinon: true,
    assert: true,
    expect: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
  plugins: ["import", "prettier", "simple-import-sort", "@typescript-eslint"],
  rules: {
    "no-console": "error",
    "sort-imports": "off",
    "import/order": "off",

    "max-nested-callbacks": "off",
    "eqeqeq": ["error", "always"],
    // "no-mixed-operators": "error",
    "no-param-reassign": "error",

    "prettier/prettier": "error",

    "simple-import-sort/sort": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  }
};
