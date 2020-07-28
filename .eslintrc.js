module.exports = {
  root: false,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': ['error', { allowElseIf: true }],
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    semi: 'off',
    'prefer-const': 'off',
    'no-var': 'off',
    'no-unused-vars': 'off',
    'no-unused-components' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
