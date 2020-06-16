<template>
	<div>
		<Presentation
			:cover="homepage.cover.url"
			:introduction-image="homepage.image.url"
			:introduction="homepage.introduction"
		/>
		<ArticleLast
			:articles="articles"
			:options="options"
		/>
		<ArticleByCategory
			:categories="options.categories"
		/>
		<WorldMap
			:countryFilter="countryFilter"
			:visited="options.country"
			@changeCountry="countryFilter = $event"
		/>
		<ArticleByCountry
			@changeCountry="countryFilter = $event"
			:countryFilter="countryFilter"
			:articles="articles"
			:options="options"
			:max="true"
			class="-mt-32"
		/>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData() {
		const homepage = await axios.get(`${process.env.API_URL}/homepage`)
		const options = await axios.get(`${process.env.API_URL}/options`)
		const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)
		return {
			options: options.data,
			articles: articles.data,
			homepage: homepage.data,
		}
	},
	head () {
		return {
			title: this.homepage.SEO.meta_title,
			meta: [
				{ hid: 'description', name: 'description', content: this.homepage.SEO.meta_description },
				// Facebook & LinkedIn
				{ name: "og:title", content: this.homepage.SEO.meta_title },
				{ name: "og:description", content: this.homepage.SEO.meta_description },
				{ name: "og:type", content: "website" },
				{ name: "og:url", content: this.$route.path },
				{ name: "og:image", content: this.homepage.cover.url },
				{ name: "og:site_name", content: 'Clairexplore' },
			]
		}
	},
	data() {
		return {
			countryFilter: 'FR'
		}
	}
}
</script>
