// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	/*
	 ** Headers of the page
	 */
	// head: {
	// 	title: "Clairexplore",
	// 	meta: [
	// 		{ charset: "utf-8" },
	// 		{ name: "viewport", content: "width=device-width, initial-scale=1" },
	// 		{
	// 			hid: "description",
	// 			name: "description",
	// 			content: process.env.npm_package_description || "",
	// 		},
	// 	],
	// 	link: [
	// 		{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
	// 		{
	// 			rel: "icon",
	// 			type: "image/png",
	// 			sizes: "32x32",
	// 			href: "/favicon-32x32.png",
	// 		},
	// 		{
	// 			rel: "stylesheet",
	// 			href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,400;1,600;1,700&display=swap",
	// 		},
	// 	],
	// },
	/*
	 ** Customize the progress-bar color
	 */
	// loading: {
	// 	color: "#4A9690",
	// 	height: "5px",
	// },
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
	modules: ["@nuxtjs/tailwindcss"],
	/*
	 ** Tailwindcss modules
	 */
	tailwindcss: {
		exposeConfig: true,
		viewer: true,
	},
	/*
	 ** Env
	 */
	// env: {
	// 	MEDIA_URL: "",
	// 	API_URL: process.env.API_URL || "https://api.clairexplore.com",
	// 	SITE_URL: process.env.SITE_URL || "https://clairexplore.com",
	// 	STAGING: process.env.STAGING || false,
	// },
});
