<template>
	<div class="bg-darkwhite text-center py-5">
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
		<Button to="/blog" text="Voir plus d'articles" />
	</div>
</template>

<script>
export default {
	props: {
		articles: {
			type: Array,
			required: true
		}
	}
}
</script>
