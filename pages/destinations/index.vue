<template>
	<div v-if="data">
		<WorldMap :countryFilter="countryFilter" :visited="data.options.country" @changeCountry="countryFilter = $event" />
		<ArticleByCountry @changeCountry="countryFilter = $event" :countryFilter="countryFilter" :articles="data.articles"
			:options="data.options" class="-mt-16 md:-mt-16" />
	</div>
</template>

<script lang="ts" setup>
import { articlesService, optionsService } from '~/lib/service';

const countryFilter = ref('FR')

const { data, error } = await useAsyncData(async () => {
	const options = await optionsService()
	const articles = await articlesService()

	return {
		options: options.data,
		articles: articles.data,
	}
})

</script>
