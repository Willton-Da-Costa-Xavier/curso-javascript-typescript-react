module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
};
