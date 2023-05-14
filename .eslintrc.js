module.exports = {
    root: true,
    env: {
      node: true,
      es2021: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "prettier"
    ],
    rules: {
        "prettier/prettier": "warn"
    }
}
