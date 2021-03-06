module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    indent: ['error', 2, { MemberExpression: 'off' }],
    'max-len': ['error', { code: 120 }],
    'newline-per-chained-call': ['error'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': false,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
