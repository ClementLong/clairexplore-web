<template>
	<picture class="w-full">
		<img :src="imageUrl" :alt="image.alternativeText" loading="lazy" class="w-full">
	</picture>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			required: true
		}
	},
	computed: {
		imageUrl() {
			if(this.image.formats && this.image.formats.large) {
				return this.image.formats.large.url
			} else {
				return this.image.url
			}
		}
	}
}
</script>
