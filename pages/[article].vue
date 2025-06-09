<template>
	<div class="text-lg lg:text-base xl:text-lg" v-if="data && data.article">
		<ArticleHeader :title="data.article.title" :date="data.article.date" :location="data.article.country"
			:cover="data.article.cover" :options="data.options" :summary="data.summary" />

		<div v-for="(component, index) in data.article.content" :key="index">
			<Single v-if="component.__component == 'article.single'" :size="component.size" :image="component.image" />

			<CustomTitle v-else-if="component.__component == 'article.title'" :size="component.size"
				:text="component.title" />

			<Paragraph v-else-if="component.__component == 'article.paragraph'" :text="component.paragraph" />

			<Collapsible v-else-if="component.__component == 'article.collapsible'" :title="component.title"
				:text="component.text" />

			<Tips v-else-if="component.__component == 'article.tips'" :text="component.text" />

			<Divider v-else-if="component.__component == 'article.divider'" />

			<Duo v-else-if="component.__component == 'article.duo'" :left="component.left" :right="component.right" />

			<Double v-else-if="component.__component == 'article.double'" :left="component.left" :right="component.right" />

			<MixedTextImage v-else-if="component.__component == 'article.mixed'" :mobile-reverse="component.mobile_reverse"
				:reverse="component.reverse" :image="component.image" :text="component.text" />

			<MixedTextPolaroid v-else-if="component.__component == 'article.mixed-pola'"
				:mobile-reverse="component.mobile_reverse" :reverse="component.reverse" :image="component.image"
				:text="component.text" />

			<Map v-else-if="component.__component == 'article.maps'" :url="component.url" />

			<Slider v-else-if="component.__component == 'article.slider'" :images="component.images" />

			<Pola v-else-if="component.__component == 'article.pola'" :images="component.images" />

			<Trio v-else-if="component.__component == 'article.trio'" :images="component.images" />

			<Scotch v-if="component.__component == 'article.scotch'" :image="component.image" />

			<Video v-if="component.__component == 'article.video'" :url="component.url" />

			<CustomButton v-if="component.__component == 'article.button'" :text="component.text" :to="component.to" />
		</div>

		<Share :mediaUrl="data.article.preview.url" />

		<ArticleFooter class="mt-8" :articles="data.article.linked_articles" :options="data.options" />
	</div>
</template>

<script setup lang="ts">
import { articleService, optionsService } from '~/lib/service';

const route = useRoute()
const { article } = route.params

useSeoMeta({
	title: 'Clairexplore',
	ogTitle: 'Clairexplore',
	author: 'Claire',
	publisher: 'Clairexplore',
	description: 'Blog de voyage',
	ogDescription: 'Blog de voyage',
	ogType: 'website',
	ogUrl: route.path,
	ogSiteName: 'Clairexplore',
	ogImage: 'https://clairexplore.s3.eu-west-3.amazonaws.com/home_f68b613250.jpeg'
})

const { data, error } = await useAsyncData(`user:${article}`, async () => {
	const options = await optionsService()
	const articles = await articleService(article)

	if (!articles.data.length) {
		navigateTo('/404')
	}

	const foundArticle = articles.data[0]
	const summary = foundArticle.content.filter((c: any) => c.__component === 'article.title' && c.size === 'Big').map((c: any) => c.title)

	useSeoMeta({
		title: foundArticle.SEO ? foundArticle.SEO.meta_title : 'Clairexplore',
		ogTitle: foundArticle.SEO ? foundArticle.SEO.meta_title : 'Clairexplore',
		author: 'Claire',
		publisher: 'Clairexplore',
		description: foundArticle.SEO.meta_description,
		ogDescription: foundArticle.SEO.meta_description,
		ogType: 'website',
		ogUrl: route.path,
		ogSiteName: 'Clairexplore',
		ogImage: foundArticle.cover.url
	})

	return {
		article: foundArticle,
		options: options.data,
		summary
	}
})
</script>
