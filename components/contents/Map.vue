<template>
	<iframe class="w-full h-75vh py-5" :src="url"></iframe>
</template>

<script lang="ts">
export default {
	props: {
		url: {
			type: String,
			required: true
		},
	}
}
</script>
