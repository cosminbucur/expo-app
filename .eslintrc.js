module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/errors'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': [1, 'never'],
    'max-len': [1, 130, 2],
    'prettier/prettier': 0,
    'object-curly-spacing': [1, 'always'],
    'react/jsx-indent': [1, 2],
    'indent': [1, 2],
    'object-property-newline': [1, {
      'allowAllPropertiesOnSameLine': true
    }],
    'object-curly-newline': [1, {
      'ObjectPattern': 'never'
    }],
    'react/jsx-curly-newline': 1,
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 1,
    'react/jsx-curly-spacing': [1, 'never'],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-closing-bracket-location': 1,
    'import/no-cycle': 1,
    'import/first': 1,
    'import/no-duplicates': 1,
    'import/order': [1, {
      'groups': ['external'],
      'newlines-between': 'always'
    }],
    'import/newline-after-import': [1, { 'count': 1 }],
    'import/no-unused-modules': [1, { 'unusedExports': true }],
    'comma-spacing': [1, { 'before': false, 'after': true }],
    'no-multi-spaces': 1,
    'arrow-spacing': [1, { 'before': true, 'after': true }],
    'array-bracket-spacing': 1,
    'space-in-parens': 1,
    'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }]
  },
  'parserOptions': { 'ecmaFeatures': { 'jsx': true } },
  'settings': {
    'import/resolver': { 'node': { 'extensions': ['.js', '.jsx'] } },
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    'import/ignore': [
      'react-native'
    ]
  }
};

/*
  [
     "off" or 0 // "warn" or 1 // "error" or 2,
     value,
   ]
*/
