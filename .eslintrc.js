/*
 * @Description: ^_^
 * @Author: sharebravery
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/multi-word-component-names": 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/camelcase": 0,
    "prefer-const": "off",
    indent: [2, 2, { SwitchCase: 1 }],
    "eol-last": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "no-async-promise-executor": "off",
    "no-useless-escape": "off",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "vue/no-v-model-argument": "off",
    "no-undef": "off",
    "vue/no-mutating-props": "off",
    "vue/no-side-effects-in-computed-properties": "off",
  },
};
