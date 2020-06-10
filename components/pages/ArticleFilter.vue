<template>
	<div class="container m-auto flex items-center mt-6 mb-4">
		<div class="font-thin font-xl font-body ml-32">
			Filtre :
		</div>
		<ArticleFilterButton
			v-for="category in categories"
			:key="category.id"
			@click.native="changeFilter(category)"
			:text="category.name"
			:active="category.id == active"
			class="ml-4"
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
