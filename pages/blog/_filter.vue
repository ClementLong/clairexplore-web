<template>
	<div class="text-center py-5">
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			Mes articles
		</h3>
		<ArticleFilter @newFilter="changeFilter($event)" :categories="options.categories" />
		<div class="container m-auto flex flex-wrap">
			<ArticlePreview
				v-for="article in articlesFiltered"
				:key="article.id"
				:article="article"
				:options="options"
				class="lg:w-1/3 md:w-1/2 lg:p-4 p-2 lg:pb-0 pb-0"
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
			// return {
			// 	articles: null,
			// 	listing: null,
			// 	options: null,
			// }
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
			filter: this.$route.params.filter
		}
	},
	computed: {
		articlesFiltered() {
			const articlesSortByDate = this.articles.sort((a, b) => {
				return new Date(b.date) - new Date(a.date)
			})

			if(!this.filter) return articlesSortByDate

			return articlesSortByDate.filter((article) => {
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
