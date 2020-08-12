<template>
	<div class="paragraph small-container m-auto text-lightblack font-body py-5" v-html="htmlText"></div>
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
			return marked(this.text || '')
		}
	}
}
</script>

<style>
/* .paragraph class can be used in other paragraph component */

.paragraph h1 {
	@apply text-xs;
}

.paragraph h2 {
	@apply text-3xl font-bold font-heading;
}

.paragraph h3 {
	@apply text-2xl font-bold font-heading;
}

.paragraph h4 {
	@apply text-xl font-bold font-heading;
}

.paragraph h5 {
	@apply font-bold text-lg font-heading;
}

.paragraph strong {
	@apply font-bold;
}

.paragraph em {
	@apply italic;
}

.paragraph hr {
	@apply my-2 border-lightblack;
}

.paragraph ul {
	@apply list-disc list-inside;
}

.paragraph ol {
	@apply list-decimal list-inside;
}

.paragraph a {
	@apply text-important underline;
}

.paragraph blockquote {
	@apply pl-4 border-l-2 border-lightblack;
}
</style>
