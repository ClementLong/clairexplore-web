<template>
	<h2 class="small-container m-auto text-lightblack text-3xl text-center font-bold font-heading py-5">{{ text }}</h2>
</template>

<script lang="ts">
export default {
	props: {
		text: {
			type: String,
			required: true
		}
	}
}
</script>
