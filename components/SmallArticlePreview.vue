<template>
	<div class="lg:w-1/3 p-2">
		<article class="flex bg-white rounded">
			<nuxt-link class="relative w-1/2 flex group" :to="{ name: 'article', params: { article: article.slug }}">
				<Photo :image="article.preview" class="h-48 overflow-hidden flex justify-center items-center rounded" />
				<div class="absolute bg left-0 right-0 top-0 bottom-0 rounded flex justify-center align-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<div class="flex justify-center align-center flex-col text-center">
						<img class="w-8 mx-auto mb-4" src="/images/article.svg" alt="Article de blog">
						<h5 class="font-body text-sm font-semibold text-white">Lire l'article</h5>
					</div>
				</div>
			</nuxt-link>
			<div class="w-1/2 px-4 flex flex-col justify-center">
				<div class="italic font-body text-sm text-lightblack font-light mt-2">
					{{ countryBySlug | capitalize }}
				</div>
				<nuxt-link :to="{ name: 'article', params: { article: article.slug }}">
					<h3 class="font-body text-center font-semibold text-lightblack lg:mt-2 mt-1 lg:mb-4 mb-2">{{ article.title }}</h3>
				</nuxt-link>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	props: {
		article: {
			type: Object,
			required: true
		},
		countries: {
			type: Array,
			required: true
		}
	},
	computed: {
		countryBySlug() {
			const currentCountry = this.countries.find((country) => {
				return this.article.country == country.slug
			})

			return currentCountry.name
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
