<template>
	<iframe
		:src="url"
		frameborder="0"
		class="small-container m-auto py-5 h-50vh"
	>
	</iframe>
</template>

<script lang="ts">
export default {
	props: {
		url: {
			type: String,
			required: true
		}
	}
}
</script>
