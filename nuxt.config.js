export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: "universal",
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: "static",
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			{
				rel: "icon",
				type: "image/x-icon",
				href: "https://images-ext-1.discordapp.net/external/LO-k41aNh_y2TB5K3a4Vh0g6QEE3GEB5TJb-1yXDVRM/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/477762276389027840/f1a56f884fe1edc46ae81d8711b33b57.png?width=636&height=636",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap",
			},
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css",
			},
		],
	},
	/*
	 ** Global CSS
	 */
	css: ["@assets/css/style.css"],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		"bootstrap-vue/nuxt",
	],
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
};

