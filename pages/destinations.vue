<template>
	<div>
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
			class="-mt-16 md:-mt-16" />
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		const destination = await axios.get(`${process.env.API_URL}/destination`)
		const options = await axios.get(`${process.env.API_URL}/options`)
		const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)
		return {
			options: options.data,
			articles: articles.data,
			destination: destination.data,
		}
	},
	data() {
		return {
			countryFilter: 'FR'
		}
	},
}
</script>
