module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': { // to add module alias
      typescript: {},
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import', // to add module alias
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // turn on file extension tsx
    'react/react-in-jsx-scope': 'off', // for next.js we don't need to import React this suppresses that warning
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-use-before-define': 'off', // To be able to import URL, idk because of airbnb `import React` gives err : https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692510509
    '@typescript-eslint/no-use-before-define': 'warn',
  },
};
