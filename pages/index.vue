<template>
	<div>
		<Presentation
			:cover="homepage.cover.url"
			:introduction-image="homepage.image.url"
			:introduction="homepage.introduction"
		/>
		<LastArticle
			:articles="articles"
		/>
		<WorldMap />
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		const homepage = await axios.get(`${process.env.API_URL}/homepage`)
		const articles = await axios.get(`${process.env.API_URL}/articles${process.env.API_URL ? '' : '?published=true'}`)
		return {
			articles: articles.data,
			homepage: homepage.data,
		}
	}
}
</script>
