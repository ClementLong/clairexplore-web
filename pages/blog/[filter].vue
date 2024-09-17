<template>
	<div class="text-center py-5" v-if="data">
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			Mes articles
		</h3>
		<ArticleFilter @newFilter="changeFilter($event)" :categories="data.options.categories" />
		<div class="container m-auto flex flex-wrap">
			<ArticlePreview v-for="article in displayedArticles" :key="article.id" :article="article" :options="data.options"
				class="lg:w-1/3 md:w-1/2 lg:p-4 p-2 lg:pb-0 pb-0" />
		</div>
		<button
			class="transition duration-200 text-body font-semibold text-sm text-important border-2 border-important rounded px-4 py-2 hover:text-white hover:bg-important"
			v-if="!allArticlesLoaded && displayedArticles.length > 0" @click="loadMoreArticles">Voir plus
			d'articles</button>
	</div>
</template>

<script setup lang="ts">
import { articlesService, listingService, optionsService } from '~/lib/service';
const route = useRoute()

const start = ref(0)
const isLoading = ref(false)
const allArticlesLoaded = ref(false)
const displayedArticles = ref<any[]>([]);

onMounted(() => {
	loadMoreArticles()
})

const { data, error } = await useAsyncData(async () => {
	const listing = await listingService()
	const options = await optionsService()

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
		listing: listing.data,
		options: options.data,
	}
})

const filter = ref(useRoute().params.filter)

const changeFilter = (newFilter: string) => {
	if (newFilter === filter.value) return;
	filter.value = newFilter;
	displayedArticles.value = [];
	allArticlesLoaded.value = false;
	start.value = 0;
	loadMoreArticles()
}

const loadMoreArticles = async () => {
	if (isLoading.value === true) {
		return
	}
	isLoading.value = true;
	const { data: newArticles } = await articlesService({ start: start.value, category: filter.value });
	if (newArticles.length < 9) {
		allArticlesLoaded.value = true;
	}
	displayedArticles.value = [...displayedArticles.value, ...newArticles];
	start.value = start.value + 9;
	isLoading.value = false;
}
</script>
