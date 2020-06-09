<template>
	<div class="text-center py-5 min-h-screen">
		<h3 class="font-heading font-bold text-2xl text-lightdark">
			Résultat : {{ search }}
		</h3>
		<div class="flex justify-center mt-4">
			<Search />
		</div>
		<SearchResult
			:articles="articles"
		/>
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData({ params }: any) {
		try {
			const articles = await axios.get(`${process.env.API_URL}/articles?title_contains=${params.search}`)
			return { articles: articles.data, search: params.search }
		} catch {
			return {}
		}
	}
}
</script>
