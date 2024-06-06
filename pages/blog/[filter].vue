<template>
	<div class="text-center py-5" v-if="data">
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			Mes articles
		</h3>
		<ArticleFilter @newFilter="changeFilter($event)" :categories="data.options.categories" />
		<div class="container m-auto flex flex-wrap">
			<ArticlePreview v-for="article in articlesFiltered" :key="article.id" :article="article" :options="data.options"
				class="lg:w-1/3 md:w-1/2 lg:p-4 p-2 lg:pb-0 pb-0" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { articlesService, listingService, optionsService } from '~/lib/service';
const route = useRoute()

const { data, error } = await useAsyncData(async () => {
	const listing = await listingService()
	const options = await optionsService()
	const articles: any = await articlesService()

	useSeoMeta({
		title: listing.data.SEO.meta_title,
		ogTitle: listing.data.SEO.meta_title,
		description: listing.data.SEO.meta_description,
		ogDescription: listing.data.SEO.meta_description,
		ogType: 'website',
		ogUrl: route.path,
		ogSiteName: 'Clairexplore'
	})

	return {
		articles: articles.data,
		listing: listing.data,
		options: options.data,
	}
})

const filter = ref(useRoute().params.filter)

const articlesFiltered = computed(() => {
	if(!data.value) return []
	const articlesSortByDate = data.value.articles.sort((a: any, b: any) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	})

	if (!filter.value) return articlesSortByDate

	return articlesSortByDate.filter((article: any) => {
		return article.categorie == filter.value
	})
})

const changeFilter = (newFilter: string) => {
	filter.value = newFilter
}
</script>
