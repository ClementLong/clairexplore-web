<template>
	<div v-if="data">
		<Presentation
			:cover="data.homepage.cover.url"
			:introduction-image="data.homepage.image.url"
			:introduction="data.homepage.introduction"
		/>
		<ArticleLast
			:articles="data.articles"
			:options="data.options"
		/>
		<ArticleByCategory
			:categories="data.options.categories"
		/>
		<WorldMap
			:countryFilter="countryFilter"
			:visited="data.options.country"
			@changeCountry="countryFilter = $event"
		/>
		<!-- <ArticleByCountry
			@changeCountry="countryFilter = $event"
			:countryFilter="countryFilter"
			:articles="data.articles"
			:options="data.options"
			:max="true"
			class="-mt-32"
		/> -->
	</div>
</template>

<script setup lang="ts">
import { articlesService, homepageService, optionsService } from '~/lib/service';

const countryFilter = ref('FR')
const route = useRoute()

const { data, error } = await useAsyncData(async() => {
	const homepage: any = await homepageService()
	const options = await optionsService()
	const articles = await articlesService()

	// definePageMeta({
	// 	title: homepage.data.SEO.meta_title,
	// 	meta: [
	// 		{ hid: 'description', name: 'description', content: homepage.data.SEO.meta_description },
	// 		// Facebook & LinkedIn
	// 		{ name: "og:title", content: homepage.data.SEO.meta_title },
	// 		{ name: "og:description", content: homepage.data.SEO.meta_description },
	// 		{ name: "og:type", content: "website" },
	// 		{ name: "og:url", content: route.path },
	// 		{ name: "og:image", content: homepage.data.cover.url },
	// 		{ name: "og:site_name", content: 'Clairexplore' },
	// 	]
	// })

	return {
			options: options.data,
			articles: articles.data,
			homepage: homepage.data,
		}
})
</script>
