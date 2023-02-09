module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
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
  },
  rules: {
    'max-len': ['error', { code: 121 }],
    'no-unused-vars': 'off',
    'arrow-parens': 'off',
    'no-confusing-arrow': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
  },
};
