const path = require("path");

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: path.resolve(__dirname, './tsconfig.json')
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

    "prettier/prettier": [
      "error",
      {
        semi: true,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "none",
        quoteProps: "as-needed"
      }
    ],

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
        "webpack.*.js",
        "gulp-functions/*.js"
      ],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
}
