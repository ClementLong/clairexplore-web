<template>
	<div class="small-container m-auto bg-darkwhite text-lightblack rounded p-2">
		<div @click="isOpen = !isOpen" class="w-full flex justify-between items-center cursor-pointer select-none">
			<div class="font-heading px-3 font-bold">{{ title }}</div>
			<img v-if="!isOpen" src="/images/plus.svg" alt="+" class="w-4 h-4 mr-1" loading="lazy">
			<img v-else src="/images/minus.svg" alt="-" class="w-4 h-4 mr-1" loading="lazy">
		</div>
		<div v-show="isOpen" class="small-container w-full font-body p-3 pb-1 paragraph text-base md:text-lg" v-html="htmlText"></div>
	</div>
</template>

<script>
import { marked } from 'marked'

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
	},
	computed: {
		htmlText() {
			return marked(this.text)
		}
	}
}
</script>
