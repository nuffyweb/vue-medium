const path = require('path');

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname) + '/node_modules/@vue/cli-service/webpack.config.js',
            },
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'arrow-parens': 'off', // Несовместимо с prettier
        'prefer-destructuring': 'off',
        indent: ['error', 4, { ignoreComments: true }],
        'max-len': ['error', {
            code: 150,
            // comments: 160,
            tabWidth: 4,
            ignoreComments: true,
            ignorePattern: '<!--(.+)-->',
            ignoreStrings: true,
        }],
        'brace-style': ['error', 'stroustrup'],
        'prefer-template': 'off',
        'spaced-comment': 'off', // подумать стоит ли добавлять
        'object-curly-spacing': ['error', 'never'],
        'no-underscore-dangle': 'off',
        'prefer-promise-reject-errors': 'off', // в принципе можно включить
        'class-methods-use-this': 'off',
        'guard-for-in': 'off',
        'import/newline-after-import': 'off',
        'import/first': 'off',
        'import/extensions': 'off',
        'no-restricted-syntax': 'off',
        'no-new': 'off', // для main.js проверить где ещё уберет
        'object-shorthand': ['error', 'methods'],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 'off',
        // 'vue/require-v-for-key': 'off', // не понимаю зачем key...
        'vue/attributes-order': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/order-in-components': 'off',
        'no-alert': 'error',
        'no-param-reassign': 'off', // с одной стороны правильно, с другой стороны можно подзабить
        'no-plusplus': 'off',
        'arrow-body-style': 'off',
        'no-shadow': 'off', // проверять где ещё может выскочить
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
        'import/prefer-default-export': 0,
        'import/no-default-export': 0,
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
        }],
        'import/no-unresolved': [
            2,
            { caseSensitive: false },
        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
