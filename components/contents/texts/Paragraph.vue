<template>
	<div class="small-container m-auto text-lightblack font-body py-5" v-html="text"></div>
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
