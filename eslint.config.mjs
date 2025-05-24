import { defineConfig, globalIgnores } from 'eslint/config'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import js from '@eslint/js'
import path from 'node:path'
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default defineConfig([
    globalIgnores([
        'dist'
    ]),
    {
        extends: compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),

        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': typescriptEslint
        },

        languageOptions: {
            globals: {
                ...globals.node
            },

            parser: tsParser
        },

        rules: {
            'arrow-body-style': ['error', 'as-needed'],
            camelcase: [
                'error',
                {
                    properties: 'never'
                }
            ],
            curly: 'error',
            'dot-notation': 'error',
            eqeqeq: [
                'error',
                'always',
                {
                    null: 'ignore'
                }
            ],
            'no-return-await': 'error',
            'object-shorthand': 'error',
            'sort-imports': [
                'error',
                {
                    allowSeparatedGroups: true,
                    ignoreCase: true
                }
            ],

            '@stylistic/array-bracket-spacing': 'error',
            '@stylistic/arrow-parens': [
                'error',
                'as-needed'
            ],
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/block-spacing': 'error',
            '@stylistic/brace-style': 'error',
            '@stylistic/comma-dangle': 'error',
            '@stylistic/comma-spacing': 'error',
            '@stylistic/comma-style': 'error',
            '@stylistic/eol-last': 'error',

            '@stylistic/indent': [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            '@stylistic/key-spacing': 'error',
            '@stylistic/keyword-spacing': 'error',
            '@stylistic/linebreak-style': 'error',
            '@stylistic/lines-between-class-members': [
                'error',
                'always',
                {
                    exceptAfterSingleLine: true
                }
            ],
            '@stylistic/no-extra-parens': 'error',
            '@stylistic/no-multiple-empty-lines': [
                'error',
                {
                    max: 1
                }
            ],
            '@stylistic/no-multi-spaces': 'error',
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/no-whitespace-before-property': 'error',
            '@stylistic/nonblock-statement-body-position': 'error',
            '@stylistic/object-curly-spacing': [
                'error',
                'always'
            ],
            '@stylistic/padded-blocks': [
                'error',
                {
                    classes: 'always'
                }
            ],

            '@stylistic/quotes': [
                'error',
                'single'
            ],
            '@stylistic/semi': [
                'error',
                'never'
            ],
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always'
                }
            ],
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/type-annotation-spacing': 'error',

            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ]
        }
    }
])
