<template>
	<div class="text-center py-5 min-h-screen" v-if="data">
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			Résultat : {{ search }}
		</h3>
		<div class="flex justify-center mt-4">
			<Search />
		</div>
		<SearchResult
			v-if="data.articles.length"
			:articles="data.articles"
			:options="data.options"
		/>
		<div v-else>
			Pas de résultat
		</div>
	</div>
</template>

<script lang="ts" setup>
import { optionsService, searchService } from '~/lib/service';

const route = useRoute()
const { search } = route.params


const { data } = await useAsyncData(async() => {
	const options = await optionsService()
	const articles = await searchService(search)

	useSeoMeta({
		title: `Résultat : ${ search }`,
	})

	return {
		articles: articles.data,
		options: options.data
	}
})
</script>
