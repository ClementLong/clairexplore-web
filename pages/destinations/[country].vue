<template>
	<div v-if="data" class="bg-darkwhite text-center py-12 min-h-screen">
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			{{ data.options.country.find((c: any) => c.slug === countryFilter).name }}
		</h3>
		<div class="container m-auto flex flex-wrap">
			<ArticlePreview v-for="article in data.articles" :key="article.id" :article="article" :options="data.options"
				class="lg:w-1/3 md:w-1/2 lg:p-4 p-2 lg:pb-0 pb-0" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { articlesByCountryService, optionsService } from '~/lib/service';
const countryFilter = ref(useRoute().params.country);

const { data, error } = await useAsyncData(async () => {
	const options = await optionsService()
	const articles = await articlesByCountryService(countryFilter.value)
	return {
		options: options.data,
		articles: articles.data,
		countryFilter: countryFilter.value,
	}
})
</script>
