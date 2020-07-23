<template>
	<picture class="w-full">
		<source media="(min-width:650px)" :srcset="MEDIA_URL + image.url">
		<img :src="MEDIA_URL + image.formats.medium.url" :alt="image.alternativeText" loading="lazy" class="w-full">
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
	}
}
</script>
