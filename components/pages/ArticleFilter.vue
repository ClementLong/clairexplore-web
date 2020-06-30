<template>
	<div class="container m-auto flex flex-raw flex-wrap items-center mt-6">
		<div class="font-thin font-xl font-body ml-4 lg:ml-4 xl:ml-16 mb-2">
			Filtre :
		</div>
		<ArticleFilterButton
			v-for="category in categories"
			:key="category.id"
			@click.native="changeFilter(category)"
			:text="category.name"
			:active="category.id == active"
			class="ml-2 lg:ml-4 mb-2"
		/>
	</div>
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			active: null
		}
	},
	mounted() {
		if(this.$route.params.filter) {
			this.active = this.categories.find((category) => this.$route.params.filter == category.slug).id
		}
	},
	methods: {
		changeFilter(category) {
			if(category.id == this.active) {
				this.$emit('newFilter', null)
				this.active = null
				} else {
				this.$emit('newFilter', category.slug)
				this.active = category.id
			}
		}
	}
}
</script>
