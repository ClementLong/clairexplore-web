<template>
	<div v-if="data">
		<WorldMap :countryFilter="countryFilter" :visited="data.options.country" @changeCountry="countryFilter = $event" />
		<ArticleByCountry @changeCountry="countryFilter = $event" :countryFilter="countryFilter" :articles="data.articles"
			:options="data.options" class="-mt-16 md:-mt-16" />
	</div>
</template>

<script lang="ts" setup>
import { articlesService, destinationService, optionsService } from '~/lib/service';

const countryFilter = ref('FR')

const { data, error } = await useAsyncData(async () => {
	const destination = await destinationService()
	const options = await optionsService()
	const articles = articlesService()

	return {
		options: options.data,
		articles: articles.data,
		destination: destination.data,
	}
})
</script>
