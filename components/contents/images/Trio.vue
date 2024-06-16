<template>
	<div class="container m-auto pb-5 flex flex-wrap lg:items-stretch">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="w-1/2 lg:w-1/3 p-1"
			:class="{ 'order-last lg:order-none w-full': index == 1 }"
		>
			<img :src="image.formats.large.url" :alt="image.alternativeText" loading="lazy" class="h-full w-full object-cover">
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},
}
</script>
