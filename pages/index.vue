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
		<WorldMap />

		<ArticleByCountry :articles="articles" />
	</div>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData() {
		const homepage = await axios.get(`${process.env.API_URL}/homepage`)
		const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)
		return {
			articles: articles.data,
			homepage: homepage.data,
		}
	},
	computed: {
		lastArticle() {
			return this.articles.slice(0, 3)
		}
	}
}
</script>
