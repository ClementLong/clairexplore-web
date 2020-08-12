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
	data() {
		return {
			MEDIA_URL: process.env.MEDIA_URL,
		}
	},
	computed: {
		imageUrl() {
			if(this.image.formats && this.image.formats.medium) {
				return this.MEDIA_URL + this.image.formats.medium.url
			} else {
				return this.MEDIA_URL + this.image.url
			}
		}
	}
}
</script>
