<template>
	<div>
		Blog
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		const listing = await axios.get(`http://localhost:1337/listing`)
		const articles = await axios.get(`http://localhost:1337/articles?published=true`)
		return {
			articles: articles.data,
			listing: listing.data,
		}
	}
}
</script>
