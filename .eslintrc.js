module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'import',
        'jest'
    ],
    'rules': {
        'eol-last': ['error', 'always' ],
        'no-multiple-empty-lines': ['error', {
            'max': 2,
            'maxEOF': 0
        }],
        'prefer-destructuring': ['error', {
            'array': true,
            'object': true
        }, {
            'enforceForRenamedProperties': true
        }],
        'import/order': ['error', {
            'alphabetize': { order: 'desc' },
            'pathGroups': [
                {
                  'pattern': './useStyles',
                  'group': 'index'
                },
                {
                  'pattern': './types',
                  'group': 'index'
                },
                {
                  'pattern': './constants',
                  'group': 'index'
                }
            ],
            'newlines-between': 'always'
        }],
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
