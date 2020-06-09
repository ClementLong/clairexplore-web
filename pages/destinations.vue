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
		const articles = await axios.get(`${process.env.API_URL}/articles?published=true`)
		return {
			articles: articles.data,
		}
	}
}
</script>
