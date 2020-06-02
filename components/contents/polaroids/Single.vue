<template>
	<div class="small-container m-auto pb-5">
		<div class="bg-darkwhite p-6 pb-16 shadow relative">
			<img :src="image" :alt="alt" class="w-full">
			<h5 v-if="title" class="absolute left-0 text-lightblack font-heading font-bold pt-4 text-xl text-center w-full">{{ title }}</h5>
		</div>
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
