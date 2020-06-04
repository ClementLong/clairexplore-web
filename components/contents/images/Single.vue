<template>
	<div
		class="m-auto pb-5"
		:class="[size == 'big' ? 'container' : '', size == 'small' ? 'small-container' : '']"
	>
		<Photo :image="image" />
		<h5 v-if="title" class="text-lightblack font-heading font-bold pt-2 text-center">{{ title }}</h5>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		size: {
			type: String,
			required: true
		},
		image: {
			type: Object,
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
