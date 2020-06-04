<template>
	<div class="bg-darkwhite text-center py-5">
		<p class="font-heading text-lightdark">
			Mes derniers
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightdark">
			Articles
		</h3>
		<div>
			<ArticlePreview
				v-for="article in articles"
				:key="article.id"
				:article="article"
			/>
		</div>
		<Button to="/" text="test" />
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

<style>

</style>
