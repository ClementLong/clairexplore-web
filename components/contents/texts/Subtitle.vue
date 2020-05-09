<template>
	<h3 class="small-container m-auto text-lightblack text-xl font-semibold font-body py-5">{{ text }}</h3>
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
