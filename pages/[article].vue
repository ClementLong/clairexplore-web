<template>
	<div class="text-lg lg:text-base xl:text-lg" v-if="data && data.article">
		<ArticleHeader
			:title="data.article.title"
			:date="data.article.date"
			:location="data.article.country"
			:cover="data.article.cover"
			:options="data.options"
		/>

		<div v-for="(component, index) in data.article.content" :key="index">
			<Single
				v-if="component.__component == 'article.single'"
				:size="component.size"
				:image="component.image"
			/>

			<Title
				v-else-if="component.__component == 'article.title'"
				:size="component.size"
				:text="component.title"
			/>

			<Paragraph
				v-else-if="component.__component == 'article.paragraph'"
				:text="component.paragraph"
			/>

			<Collapsible
				v-else-if="component.__component == 'article.collapsible'"
				:title="component.title"
				:text="component.text"
			/>

			<Tips
				v-else-if="component.__component == 'article.tips'"
				:text="component.text"
			/>

			<Divider
				v-else-if="component.__component == 'article.divider'"
			/>

			<Duo
				v-else-if="component.__component == 'article.duo'"
				:left="component.left"
				:right="component.right"
			/>

			<Double
				v-else-if="component.__component == 'article.double'"
				:left="component.left"
				:right="component.right"
			/>

			<MixedTextImage
				v-else-if="component.__component == 'article.mixed'"
				:mobile-reverse="component.mobile_reverse"
				:reverse="component.reverse"
				:image="component.image"
				:text="component.text"
			/>

			<MixedTextPolaroid
				v-else-if="component.__component == 'article.mixed-pola'"
				:mobile-reverse="component.mobile_reverse"
				:reverse="component.reverse"
				:image="component.image"
				:text="component.text"
			/>

			<Map
				v-else-if="component.__component == 'article.maps'"
				:url="component.url"
			/>

			<Slider
				v-else-if="component.__component == 'article.slider'"
				:images="component.images"
			/>

			<Pola
				v-else-if="component.__component == 'article.pola'"
				:images="component.images"
			/>

			<Scotch
				v-if="component.__component == 'article.scotch'"
				:image="component.image"
			/>

			<Video
				v-if="component.__component == 'article.video'"
				:url="component.url"
			/>

		</div>

		<Share :mediaUrl="data.article.preview.url" />

		<ArticleFooter
			class="mt-8"
			:articles="data.article.linked_articles"
			:options="data.options"
		/>
	</div>
</template>

<script setup lang="ts">
import { articleService, optionsService } from '~/lib/service';

const { article } = useRoute().params

const { data, error } = await useAsyncData(`user:${article}`, async() => {
	console.log(useRoute().params.article)

	const options = await optionsService()
	const articles = await articleService(article)

	if(!articles.data.length) {
		navigateTo('/404')
	}

	return {
		article: articles.data[0],
		options: options.data
	}
})

// head () {
// 		return {
// 			title: this.article.SEO ? this.article.SEO.meta_title : 'Clairexplore',
// 			meta: [
// 				{ hid: 'description', name: 'description', content: this.article.SEO ? this.article.SEO.meta_description : 'Clairexplore' },
// 				{ name: "author", content: 'Clairexplore' },
// 				{ name: "publisher", content: 'Clairexplore' },

// 				// Facebook & LinkedIn
// 				{ name: "og:title", content: this.article.Social ? this.article.Social.title : 'Clairexplore' },
// 				{ name: "og:description", content: this.article.Social ? this.article.Social.description : 'Clairexplore' },
// 				{ name: "og:type", content: "website" },
// 				{ name: "og:url", content: this.$route.path },
// 				{ name: "og:image", content: this.article.cover.url },
// 				{ name: "og:site_name", content: 'Clairexplore' },
// 			]
// 		}
// 	}
</script>
