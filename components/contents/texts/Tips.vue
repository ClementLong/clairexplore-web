<template>
	<div class="small-container m-auto bg-darkwhite rounded my-5 p-4">
		<div class="paragraph text-base md:text-lg text-lightblack font-body p-4 border border-lightblack rounded" v-html="htmlText"></div>
	</div>
</template>

<script>
import marked from 'marked'

export default {
	props: {
		text: {
			type: String,
			required: true
		}
	},
	computed: {
		htmlText() {
			return marked(this.text)
		}
	}
}
</script>
