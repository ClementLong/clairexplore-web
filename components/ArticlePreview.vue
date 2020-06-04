<template>
	<article>
		<nuxt-link :to="{ name: 'article', params: { article: article.slug }}">
			{{ article.title }}
		</nuxt-link>
		{{ article.slug }}
		{{ article.description }}
		{{ article.country }}
		{{ article.preview }}

		{{ formatedDate }}
	</article>
</template>

<script>
import moment from 'moment'

export default {
	props: {
		article: {
			type: Object,
			required: true
		}
	},
	computed: {
		formatedDate() {
			return moment(this.article.date).locale('fr').format('Do MMMM YYYY')
		}
	}
}
</script>
