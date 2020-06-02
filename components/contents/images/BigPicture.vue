<template>
	<div class="container m-auto pb-5">
		<img :src="image" :alt="alt" class="w-full">
		<h5 v-if="title" class="text-lightblack font-heading font-bold pt-2 text-center">{{ title }}</h5>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		image: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		title: {
			type: String,
			default: null
		}
	}
}
</script>
