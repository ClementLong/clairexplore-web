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
import axios from 'axios'

const countryFilter = ref('FR')
const route = useRoute()

const { data, error } = await useAsyncData(async() => {
	const homepage: any = await axios.get(`${process.env.API_URL}/homepage`)
	const options = await axios.get(`${process.env.API_URL}/options`)
	const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)

	// definePageMeta({
	// 	title: homepage.SEO.meta_title,
	// 	meta: [
	// 		{ hid: 'description', name: 'description', content: homepage.SEO.meta_description },
	// 		// Facebook & LinkedIn
	// 		{ name: "og:title", content: homepage.SEO.meta_title },
	// 		{ name: "og:description", content: homepage.SEO.meta_description },
	// 		{ name: "og:type", content: "website" },
	// 		{ name: "og:url", content: route.path },
	// 		{ name: "og:image", content: homepage.cover.url },
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
