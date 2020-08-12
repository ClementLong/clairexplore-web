<template>
	<div class="bg-darkwhite text-center py-12">
		<p class="font-hand text-xl text-lightblack -mb-4">
			Articles
		</p>
		<h4 class="font-heading font-bold text-2xl text-lightblack">
			similaires
		</h4>
		<div class="container m-auto flex flex-wrap py-5">
			<ArticlePreview
				v-for="article in articles"
				:key="article.id"
				:article="article"
				:options="options"
				class="lg:w-1/3 md:w-1/2 lg:p-6 p-4"
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
	}
}
</script>
