module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
		es2021: true,
		commonjs: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard',
		'@vue/typescript/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-useless-constructor': 'off',
		'func-call-spacing': 0,
		'@typescript-eslint/no-useless-constructor': ['error'],
		'vue/no-multiple-template-root': 0,
		'vue/multi-word-component-names': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-member-accessibility': ['error'],
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/naming-convention': ['error',
			{
				selector: 'default',
				format: ['PascalCase', 'camelCase', 'snake_case', 'UPPER_CASE'],
			},
			{
				selector: 'function',
				format: ['PascalCase', 'camelCase'],
				leadingUnderscore: 'forbid',
			},
			{
				selector: 'variable',
				format: ['snake_case', 'camelCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'memberLike',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
				leadingUnderscore: 'allow',
			},
		],
		'no-trailing-spaces': ['error', {
			ignoreComments: true,
			skipBlankLines: false,
		}],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'padded-blocks': 0,
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-useless-return': 0,
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always',
			functions: 'always-multiline',
		}],
		semi: ['error', 'always'],
		'vue/script-indent': ['error', 'tab', {
			baseIndent: 1,
		}],
		quotes: ['error', 'single'],
		'keyword-spacing': [
			'error', {
				overrides: {
					catch: {
						before: true,
						after: false,
					},
				},
			},
		],
		'array-bracket-spacing': 0,
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
			},
		},
	],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
};
