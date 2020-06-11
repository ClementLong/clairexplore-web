<template>
	<div
		:class="[ active ? 'bg-important text-white' : 'text-important' ]"
		class="cursor-pointer transition duration-200 text-body font-semibold text-sm border-2 border-important rounded px-2 lg:px-4 py-1 hover:bg-imporant"
	>
		{{ text }}
	</div>
</template>

<script lang="ts">
export default {
	props: {
		text: {
			required: true,
			type: String
		},
		active: {
			required: true,
			type: Boolean
		}
	}
}
</script>
