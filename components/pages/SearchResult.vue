<template>
	<div class="container m-auto flex flex-wrap">
		<ArticlePreview
			v-for="article in articles"
			:key="article.id"
			:article="article"
			class="lg:w-1/3 lg:p-6 p-4"
		/>
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
