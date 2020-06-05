<template>
	<div
		class="small-container m-auto pb-5"
	>
		<Photo :image="image" />
		<h5 v-if="image.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ image.caption }}</h5>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		image: {
			type: Object,
			required: true
		}
	}
}
</script>
