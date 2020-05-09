<template>
	<div class="small-container m-auto bg-lightgrey rounded my-5 p-4">
		<div class=" text-lightblack font-body p-4 border border-lightblack rounded" v-html="text"></div>
	</div>
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
