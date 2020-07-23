<template>
	<div
		class="m-auto pb-5"
		:class="[size == 'big' ? 'container' : '', size == 'small' ? 'small-container' : '']"
	>
		<Photo v-if="image" :image="image" />
		<div v-else>Single photo</div>
		<h5 v-if="image && image.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ image.caption }}</h5>
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
	}
}
</script>
