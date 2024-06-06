<template>
	<div v-if="data">
		<Presentation :cover="data.homepage.cover.url" :introduction-image="data.homepage.image.url"
			:introduction="data.homepage.introduction" />
		<ArticleLast :articles="data.articles" :options="data.options" />
		<ArticleByCategory :categories="data.options.categories" />
		<WorldMap :countryFilter="countryFilter" :visited="data.options.country" @changeCountry="countryFilter = $event" />
		<ArticleByCountry @changeCountry="countryFilter = $event" :countryFilter="countryFilter" :articles="data.articles"
			:options="data.options" :max="true" class="-mt-32" />
	</div>
</template>

<script setup lang="ts">
import { articlesService, homepageService, optionsService } from '~/lib/service';

const countryFilter = ref('FR')
const route = useRoute()

const { data, error } = await useAsyncData(async () => {
	const [
		homepage, options, articles
	] = await Promise.all([
		homepageService(),
		optionsService(),
		articlesService(),
	])

	useSeoMeta({
		title: homepage.data.SEO.meta_title,
		ogTitle: homepage.data.SEO.meta_title,
		description: homepage.data.SEO.meta_description,
		ogDescription: homepage.data.SEO.meta_description,
		ogType: 'website',
		ogUrl: route.path,
		ogImage: homepage.data.cover.url,
		ogSiteName: 'Clairexplore'
	})

	return {
		options: options.data,
		articles: articles.data,
		homepage: homepage.data,
	}
})
</script>
