<template>
	<h2 v-if="size == 'big'" class="small-container m-auto text-lightblack text-3xl text-center font-bold font-heading py-5">{{ text }}</h2>
	<h3 v-else-if="size == 'medium'" class="small-container m-auto text-lightblack text-xl font-semibold font-body py-5">{{ text }}</h3>
	<h3 v-else class="small-container m-auto text-lightblack text-lg font-semibold font-body py-5">{{ text }}</h3>
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
