<template>
	<div class="bg-darkwhite text-center py-12">
		<p class="font-hand text-xl text-lightblack -mb-4">
			Mes derniers
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightblack">
			Articles
		</h3>
		<div class="container m-auto flex flex-wrap py-5 items-stretch">
			<ArticlePreview
				v-for="article in lastArticle"
				:key="article.id"
				:article="article"
				:options="options"
				class="w-full lg:w-1/3 md:w-1/2 lg:p-6 p-4"
			/>
		</div>
		<Button to="/blog" text="Voir plus d'articles" />
	</div>
</template>

<script>
export default {
	props: {
		articles: {
			type: Array,
			required: true
		},
		options: {
			type: Object,
			required: true
		}
	},
	computed: {
		lastArticle() {
			const articlesSortByDate = this.articles.slice().sort((a, b) => {
				return new Date(b.date) - new Date(a.date)
			})
			return articlesSortByDate.slice(0, 3)
		}
	}
}
</script>
