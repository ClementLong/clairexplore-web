<template>
	<div>
		<WorldMap />
		<ArticleByCountry :articles="articles" />
		<ArticleByContinent />
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		const destination = await axios.get(`${process.env.API_URL}/destination`)
		const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)
		return {
			articles: articles.data,
			destination: destination.data,
		}
	}
}
</script>
