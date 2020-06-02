<template>
	<nuxt-link
		:to="to"
		class="transition text-important border-2 border-important rounded px-4 py-2 hover:text-white hover:bg-important"
	>{{ text }}</nuxt-link>
</template>

<script>
export default {
	props: {
		to: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	}
}
</script>
