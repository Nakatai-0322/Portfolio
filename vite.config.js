import vue from '@vitejs/plugin-vue';
const path = require("path");

export default {
	plugins: [vue()],
	server: {
		port: 8080,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
}
