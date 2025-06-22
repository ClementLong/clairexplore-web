<template>
	<div class="title-wrapper">
		<span class="title-pointer" :id="text" />
		<h2 v-if="size == 'Big'" class="small-container m-auto text-lightblack text-3xl text-center font-bold font-heading py-5">{{ text }}</h2>
		<h3 v-else-if="size == 'Medium'" class="small-container m-auto italic text-lightblack text-2xl font-semibold font-heading py-5">{{ text }}</h3>
		<h3 v-else class="small-container m-auto text-lightblack text-lg font-semibold font-body py-5">{{ text }}</h3>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		text: {
			type: String,
			required: true
		},
		size: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.title-wrapper {
	position: relative;
}
.title-pointer {
	position: absolute;
	top: -6rem;
	@media screen and (min-width: 900px) {
		top: -11rem;
	}
}
</style>
