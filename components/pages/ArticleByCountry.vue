<template>
	<div class="text-center py-5" style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,245,241,1) 20%);">
		<p class="font-heading text-lightdark">
			Article par pays
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightdark">
			{{ categoriesBySlug }}
		</h3>
		<div>
			<div class="container m-auto flex flex-wrap pt-4 pb-8">
				<SmallArticlePreview v-for="article in articlesByCountry" :key="article.id" :article="article" :countries="countries" />
			</div>
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
		countryFilter: {
			type: String,
			required: true
		},
		countries: {
			type: Array,
			required: true
		}
	},
	computed: {
		articlesByCountry() {
			return this.articles.filter((article) => {
				return this.countryFilter == article.country
			})
		},
		categoriesBySlug() {
			const currentCountry = this.countries.find((country) => {
				return this.countryFilter == country.slug
			})

			return currentCountry.name
		}
	}
}
</script>
