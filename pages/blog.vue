<template>
	<div class="text-center py-5">
		<p class="font-heading text-lightdark">
			Mes derniers
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightdark">
			Articles
		</h3>
		<div class="container m-auto flex flex-wrap">
			<ArticlePreview
				v-for="article in articles"
				:key="article.id"
				:article="article"
				class="lg:w-1/3 lg:p-6 p-4"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		try {
			const listing = await axios.get(`${process.env.API_URL}/listing`)
			const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)
			return {
				articles: articles.data,
				listing: listing.data,
			}
		} catch {
			return {
				articles: null,
				listing: null,
			}
		}
	}
}
</script>
