<template>
	<div class="text-center py-5">
		<h3 class="font-heading font-bold text-2xl text-lightdark">
			Mes articles
		</h3>
		<ArticleFilter @newFilter="changeFilter($event)" :categories="options.categories" />
		<div class="container m-auto flex flex-wrap">
			<ArticlePreview
				v-for="article in articlesFiltered"
				:key="article.id"
				:article="article"
				:countries="options.country"
				class="lg:w-1/3 md:w-1/2 lg:p-6 p-4"
			/>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData() {
		try {
			const listing = await axios.get(`${process.env.API_URL}/listing`)
			const options = await axios.get(`${process.env.API_URL}/options`)
			const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)
			return {
				articles: articles.data,
				listing: listing.data,
				options: options.data,
			}
		} catch {
			return {
				articles: null,
				listing: null,
				options: null,
			}
		}
	},
	head () {
		return {
			title: this.listing.SEO.meta_title,
			meta: [
				{ hid: 'description', name: 'description', content: this.listing.SEO.meta_description }
			]
		}
	},
	data() {
		return {
			filter: null
		}
	},
	computed: {
		articlesFiltered() {
			if(!this.filter) return this.articles

			return this.articles.filter((article) => {
				return article.categorie == this.filter
			})
		}
	},
	methods: {
		changeFilter(newFilter) {
			this.filter = newFilter
		}
	}
}
</script>
