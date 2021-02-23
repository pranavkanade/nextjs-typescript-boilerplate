# pkanade.com

site revamp

### ES-lint setup

1. Install Eslint - https://eslint.org/docs/user-guide/getting-started
2. Add following rules to `eslintrc`

   ```js
   rules: {
     semi: ['error', 'always'],
     quotes: ['error', 'single'],
     'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // turn on file extension tsx
     'react/react-in-jsx-scope': 'off', // for next.js we don't need to import React this suppresses that warning
     'jsx-a11y/anchor-is-valid': 'warn',
     'no-use-before-define': 'off', // To be able to import URL, idk because of airbnb `import React` gives err : https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692510509
     '@typescript-eslint/no-use-before-define': 'warn',
   }
   ```

3. Add Path Alias (in `tsconfig.json`) -

   ```json
   "baseUrl": "./",
   "paths": {
     "@components/*": ["src/components/*"],
     "@globals/*": ["src/globals/*"],
     "@ui/*": ["src/ui/*"],
     "@utils/*": ["src/utils/*"],
   },
   ```

   [Install following](https://stackoverflow.com/questions/57032522/eslint-complains-about-typescripts-path-aliasing)

   ```bash
   yarn add -D eslint-plugin-import eslint-import-resolver-typescript
   ```

   Add Following options to `eslintrc`

   ```js
     "settings": {
       "import/resolver": {
         "typescript": {}
       }
     },
     "parser": "@typescript-eslint/parser",
     "parserOptions": {
       "project": "./tsconfig.json",
       "tsconfigRootDir": "./"
     },
     "plugins": [
       "@typescript-eslint",
       "import"
     ],
   ```
