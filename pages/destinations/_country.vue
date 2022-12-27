<template>
	<div class="bg-darkwhite text-center py-12 min-h-screen">
			<h3 class="font-heading font-bold text-2xl text-lightblack">
				{{ options.country.find(c => c.slug === countryFilter).name }}
			</h3>
			<div class="container m-auto flex flex-wrap">
				<ArticlePreview
					v-for="article in articles"
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
	async asyncData({ params }) {
		const destination = await axios.get(`${process.env.API_URL}/destination`)
		const options = await axios.get(`${process.env.API_URL}/options`)
		const articles = await axios.get(`${process.env.API_URL}/articles?country=${ params.country }${process.env.STAGING ? '' : '&published=true'}`)
		return {
			options: options.data,
			articles: articles.data,
			destination: destination.data,
			countryFilter: params.country
		}
	},
}
</script>
