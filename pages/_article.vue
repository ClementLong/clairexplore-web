<template>
	<div class="text-lg lg:text-base xl:text-lg">
		<ArticleHeader
			:title="article.title"
			:date="article.date"
			:location="article.country"
			:cover="article.cover"
			:options="options"
		/>

		<div v-for="(component, index) in article.content" :key="index">
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

		<Share :mediaUrl="article.preview.url" />

		<ArticleFooter
			class="mt-8"
			:articles="article.linked_articles"
			:options="options"
		/>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData({ params, redirect }) {
		try {
			const options = await axios.get(`${process.env.API_URL}/options`)
			const article = await axios.get(`${process.env.API_URL}/articles?slug=${params.article}`)

			if(!article.data.length) {
				redirect('/404')
			}

			return {
				article: article.data[0],
				options: options.data
			}
		} catch {
			return {}
		}
	},
	head () {
		return {
			title: this.article.SEO ? this.article.SEO.meta_title : 'Clairexplore',
			meta: [
				{ hid: 'description', name: 'description', content: this.article.SEO ? this.article.SEO.meta_description : 'Clairexplore' },
				{ name: "author", content: 'Clairexplore' },
				{ name: "publisher", content: 'Clairexplore' },

				// Facebook & LinkedIn
				{ name: "og:title", content: this.article.Social ? this.article.Social.title : 'Clairexplore' },
				{ name: "og:description", content: this.article.Social ? this.article.Social.description : 'Clairexplore' },
				{ name: "og:type", content: "website" },
				{ name: "og:url", content: this.$route.path },
				{ name: "og:image", content: this.article.cover.url },
				{ name: "og:site_name", content: 'Clairexplore' },
			]
		}
	}
}
</script>
