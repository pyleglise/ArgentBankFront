module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'react-app'
  ],
  globals: {
    window: true,
    browser: true,
    node: true,
    document: true
  },
  env: {
    browser: true,
    node: true
  }
}
