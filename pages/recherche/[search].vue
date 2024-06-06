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
import { optionsService, searchService } from '~/lib/service';

export default {
	async asyncData({ params }) {
		try {
			const articles = await searchService(params.search)
			const options = optionsService()

			useSeoMeta({
				title: `Résultat : ${ params.search }`,
			})

			return {
				articles: articles.data,
				search: params.search,
				options: options.data
			}
		} catch {
			return {}
		}
	},
}
</script>
