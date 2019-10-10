module.exports = {
  root: true,
  env: {
    es2017: true,
    browser: true,
    commonjs: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    // project: path.resolve(__dirname, './tsconfig.json')
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier"
  ],
  plugins: [
    "import",
    "prettier",
    "simple-import-sort",
    "@typescript-eslint"
  ],
  rules: {
    "no-console": "off",
    "sort-imports": "off",

    eqeqeq: ["error", "always"],
    "no-mixed-operators": "error",
    "no-param-reassign": "error",

    "prettier/prettier": "error",

    "simple-import-sort/sort": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true }
    ]
  },
  overrides: [
    {
      files: [
        "karma.conf.js",
        "gulpfile.js",
        "lib/**/*.js",
        "configs/*.js"
      ],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    },
    {
      files: [
        "test/*.js",
        "public/*.js",
        "examples/js/*.js"
      ],
      globals: {
        lava: true,
        LavaJs: true,
        sinon: true,
        expect: true
      },
      env: {
        mocha: true,
        browser: true
      },
      rules: {
        "max-nested-callbacks": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
