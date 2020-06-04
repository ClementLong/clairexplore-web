<template>
	<picture>
		<source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
		<source media="(min-width:465px)" srcset="img_white_flower.jpg">
		<img :src="src.url" alt="Flowers" style="width:auto;">
	</picture>
</template>

<script>
export default {
	props: {
		src: {
			type: Object,
			required: true
		}
	}
}
</script>
