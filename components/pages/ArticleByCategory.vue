<template>
	<div class="flex bg-lightblack p-1">
		<div
			v-for="category in categories"
			:key="category.id"
			class="flex-1 bg-white"
		>
			{{ category.name }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			required: true
		}
	}
}
</script>

<style>

</style>
