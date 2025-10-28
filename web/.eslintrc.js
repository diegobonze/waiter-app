module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    // Regra pedida: usar aspas simples
    'quotes': ['error', 'single', { avoidEscape: true }],
    // Remover ponto e vírgula ao salvar: nenhuma semicolon
    // Desliga a regra base para evitar conflitos com o linter do TypeScript
    'semi': 'off',
    // Regra específica para TypeScript (ativa e auto-fixable)
    '@typescript-eslint/semi': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
  }
};
