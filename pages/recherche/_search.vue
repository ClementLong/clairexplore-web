<template>
	<div class="text-center py-5 min-h-screen">
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			Résultat : {{ search }}
		</h3>
		<div class="flex justify-center mt-4">
			<Search />
		</div>
		<SearchResult
			:articles="articles"
			:options="options"
		/>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData({ params }) {
		try {
			const articles = await axios.get(`${process.env.API_URL}/articles?title_contains=${params.search}&published=true`)
			const options = await axios.get(`${process.env.API_URL}/options`)
			return {
				articles: articles.data,
				search: params.search,
				options: options.data
			}
		} catch {
			return {}
		}
	},
	head () {
		return {
			title: `Résultat : ${ this.search }`
		}
	}
}
</script>
