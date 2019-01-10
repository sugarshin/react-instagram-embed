const pkg = require('./package.json')

const reactSettings = () => ({ version: pkg.devDependencies.react.replace(/[^0-9.]/g, '') })

module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended', 'plugin:ava/recommended'],
  plugins: ['babel', 'react', 'flowtype', 'ava'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    semi: [2, 'never'],
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
  },
  settings: {
    react: reactSettings(),
  },
}
