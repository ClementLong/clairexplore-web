// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	/*
	 ** Headers of the page
	 */
	app: {
		head: {
			title: "Clairexplore",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,400;1,600;1,700&display=swap",
				},
			],
		},
	},
	/*
	 ** Components
	 */
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/sitemap",
		"nuxt-simple-robots",
		"nuxt-gtag",
	],
	/*
	 ** Tailwindcss modules
	 */
	tailwindcss: {
		exposeConfig: true,
		viewer: true,
	},
	/*
	 ** Analytics
	 */
	gtag: {
		id: "G-XPKYLQXFSN",
	},
	/*
	 ** Robot & Sitemap
	 */
	site: {
		url: "https://www.clairexplore.com",
		indexable: !process.env.STAGING,
	},
});
