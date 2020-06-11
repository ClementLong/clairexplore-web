<template>
	<div>
		<Presentation
			:cover="homepage.cover.url"
			:introduction-image="homepage.image.url"
			:introduction="homepage.introduction"
		/>
		<LastArticle
			:articles="lastArticle"
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
			:countries="options.country"
			class="-mt-16 md:-mt-32" />
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
	data() {
		return {
			countryFilter: 'FR'
		}
	},
	computed: {
		lastArticle() {
			return this.articles.slice(0, 3)
		}
	}
}
</script>
