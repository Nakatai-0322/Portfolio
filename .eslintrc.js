module.exports = {
	extends: ["eslint:recommended"],
	plugins: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	env: {
		es2021: true,
		node: true,
	},
	globals: {},
	rules: {
		"no-undef": "off",
		"no-constant-condition": "off",
		indent: ["warn", "tab"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
