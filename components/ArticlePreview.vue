<template>
	<article>
		<div class="bg-white rounded h-full">
			<nuxt-link class="relative flex group" :to="{ name: 'article', params: { article: article.slug }}">
				<Photo :image="article.preview" class="h-64 overflow-hidden flex justify-center items-center rounded" />
				<div class="absolute bg left-0 right-0 top-0 bottom-0 rounded flex justify-center align-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<div class="flex justify-center align-center flex-col text-center">
						<img class="w-8 mx-auto mb-4" src="/images/article.svg" alt="Article de blog">
						<h5 class="font-body text-sm font-semibold text-white">Lire l'article</h5>
					</div>
				</div>
			</nuxt-link>
			<div class="italic font-body text-sm text-lightblack font-light mt-2">
				{{ formatedDate }} - {{ article.country | capitalize }}
			</div>
			<nuxt-link :to="{ name: 'article', params: { article: article.slug }}">
				<h3 class="font-body text-xl text-center font-semibold text-lightblack px-4 lg:mt-2 mt-1 lg:mb-4 mb-2">{{ article.title }}</h3>
			</nuxt-link>
			<p class="font-body text-lightblack text-center text-sm pb-8 px-4">
				{{ article.description }}
			</p>
		</div>
	</article>
</template>

<script>
import moment from 'moment'

export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	},
	computed: {
		formatedDate() {
			return moment(this.article.date).locale('fr').format('Do MMMM YYYY')
		}
	},
	filters: {
		capitalize(value) {
			if (!value) return ''
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
}
</script>

<style scoped>
	.bg {
		background: rgba(74, 150, 144, 0.75);
	}
</style>
