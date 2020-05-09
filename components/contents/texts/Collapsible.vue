<template>
	<div class="small-container m-auto bg-lightgrey text-lightblack rounded p-2">
		<div @click="isOpen = !isOpen" class="w-full flex justify-between cursor-pointer select-none">
			<div class="font-heading px-3 font-bold">{{ title }}</div>
			<img v-if="!isOpen" src="/images/plus.svg" alt="+" class="w-4 mr-1">
			<img v-else src="/images/minus.svg" alt="-" class="w-4 mr-1">
		</div>
		<div v-show="isOpen" class="small-container w-full font-body p-3 pb-1" v-html="text"></div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			isOpen: false
		}
	}
}
</script>
