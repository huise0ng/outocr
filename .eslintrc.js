module.exports = {
    parser: '@babel/eslint-parser', 
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      requireConfigFile: false, 
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier', // Prettier와의 통합
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  