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
		{{ articles }}
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		const homepage = await axios.get(`http://localhost:1337/homepage`)
		const articles = await axios.get(`http://localhost:1337/articles?published=true`)
		return {
			articles: articles.data,
			homepage: homepage.data,
		}
	}
}
</script>
