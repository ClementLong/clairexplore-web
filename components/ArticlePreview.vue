<template>
	<article>
		<div v-if="!small" class="bg-white rounded h-full">
			<nuxt-link class="relative flex group" :to="{ name: 'article', params: { article: article.slug }}">
				<img v-if="article.preview.formats.medium" :src="MEDIA_URL + article.preview.formats.medium.url" :alt="article.preview.alternativeText" class="h-56 overflow-hidden flex justify-center items-center rounded w-full object-cover">
				<div class="absolute bg left-0 right-0 top-0 bottom-0 rounded flex justify-center align-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
					<div class="flex justify-center align-center flex-col text-center">
						<div class="w-16 mx-auto mb-4 icon" v-html="icon['_' + article.categorie]"></div>
						<h5 class="font-heading text-lg font-bold text-white">{{ categoryBySlug }}</h5>
					</div>
				</div>
			</nuxt-link>
			<div class="italic font-body text-sm text-lightblack font-light mt-2">
				{{ formatedDate }} - {{ countryBySlug | capitalize }}
			</div>
			<nuxt-link :to="{ name: 'article', params: { article: article.slug }}">
				<h3 class="font-body text-lg text-center font-semibold text-lightblack px-4 lg:mt-2 mt-1 lg:mb-4 mb-2">{{ article.title }}</h3>
			</nuxt-link>
			<p class="font-body text-lightblack text-center text-sm pb-8 px-4">
				{{ article.description }}
			</p>
		</div>
		<div v-else class="p-2">
			<article class="flex bg-white rounded shadow-sm">
				<nuxt-link class="relative w-1/2 flex group" :to="{ name: 'article', params: { article: article.slug }}">
					<img v-if="article.preview" :src="MEDIA_URL + article.preview.formats.small.url" :alt="article.preview.alternativeText" class="h-48 overflow-hidden flex justify-center items-center rounded w-full object-cover">
					<div class="absolute bg left-0 right-0 top-0 bottom-0 rounded flex justify-center align-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
						<div class="flex justify-center align-center flex-col text-center">
							<div class="w-12 mx-auto mb-4 icon" v-html="icon['_' + article.categorie]"></div>
							<h5 class="font-heading text-lg font-bold text-white">{{ categoryBySlug }}</h5>
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
	</article>
</template>

<script>
import moment from 'moment'
import _itineraires_de_voyage from "~/assets/icons/itineraires_de_voyage.svg?raw";
import _aventure_nature from "~/assets/icons/aventure_nature.svg?raw";
import _a_la_decouverte_de from "~/assets/icons/a_la_decouverte_de.svg?raw";
import _conseils_de_voyage from "~/assets/icons/conseils_de_voyage.svg?raw";
import _20photos from "~/assets/icons/20photos.svg?raw";
import _food_and_drink from "~/assets/icons/food_and_drink.svg?raw";

export default {
	props: {
		article: {
			type: Object,
			required: true
		},
		small: {
			type: Boolean,
			default: false
		},
		options: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			icon: {
				_itineraires_de_voyage,
				_aventure_nature,
				_a_la_decouverte_de,
				_conseils_de_voyage,
				_20photos,
				_food_and_drink,
			},
			MEDIA_URL: process.env.MEDIA_URL,
		}
	},
	computed: {
		formatedDate() {
			return moment(this.article.date).locale('fr').format('Do MMMM YYYY')
		},
		categoryBySlug() {
			const currentCategorie = this.options.categories.find((cat) => {
				return this.article.categorie == cat.slug
			})

			if(currentCategorie) return currentCategorie.name
			return ''
		},
		countryBySlug() {
			const currentCountry = this.options.country.find((country) => {
				return this.article.country == country.slug
			})

			if(currentCountry) return currentCountry.name
			return ''
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

	.icon {
		fill: white;
	}
</style>
