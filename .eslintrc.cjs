module.exports = {
  root: true,

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },

  env: {
    node: true,
    browser: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
  ],

  plugins: [
    'vue',
  ],

  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'parser-error': 'off', // Add this line to disable the parser error globally
  },
}


