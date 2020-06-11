const axios = require('axios')

module.exports = {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,400;1,600;1,700&display=swap' },
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'~/components',
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxt/typescript-build',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module',
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/pwa',
		'@nuxtjs/svg'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/sitemap',
	],
	sitemap: {
		routes: async () => {
			const { data } = await axios.get(`${process.env.API_URL || 'https://api.clairexplore.com' }/articles${process.env.STAGING ? '' : '?published=true'}`)
			return data.map((article) => `/${article.slug}`)
		}
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	},
	env: {
		MEDIA_URL: '',
		API_URL: process.env.API_URL || 'https://api.clairexplore.com'
	},
	pwa: {
		manifest: {
			name: 'Clairexplore',
			lang: 'fr',
			display: 'fullscreen'
		}
	 }
}
