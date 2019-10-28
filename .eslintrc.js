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
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
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
    "import/order": "off",

    "eqeqeq": ["error", "always"],
    // "no-mixed-operators": "error",
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
        ".eslintrc.js",
        "karma.conf.js",
        "configs/**/*.js"
      ],
      parser: "babel-eslint",
      env: {
        browser: false,
        node: true
      },
      rules: {
        "simple-import-sort/sort": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "import/order": ["error", { "newlines-between": "always" }]
      }
    },
    {
      files: [
        "test/**/*.js",
        "static/**/*.js",
        "examples/*.js"
      ],
      globals: {
        M: true,
        lava: true,
        LavaJs: true,
        sinon: true,
        assert: true,
        expect: true
      },
      env: {
        mocha: true
      },
      rules: {
        "max-nested-callbacks": "off",

        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
}
