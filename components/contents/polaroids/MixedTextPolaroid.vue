<template>
	<div
		:class="[
			'container m-auto pb-5 flex items-center',
			reverse ? 'lg:flex-row' : 'lg:flex-row-reverse',
			mobileReverse ? 'flex-col' : 'flex-col-reverse'
		]"
	>
		<div
			:class="[
				'flex-1 bg-darkwhite p-6 pb-16 shadow relative',
				reverse ? 'lg:mr-5 lg:mb-0' : 'lg:ml-5',
				mobileReverse ? 'mb-5' : 'mb-0'
			]"
		>
			<Photo :image="image" />
			<h5 v-if="image.caption" class="absolute left-0 text-lightblack font-heading font-bold pt-4 text-xl text-center w-full">{{ image.caption }}</h5>
		</div>
		<div
			:class="[
				'paragraph flex-1 text-lightblack font-body sm:small-container',
				reverse ? 'lg:ml-5' : 'lg:mr-5 lg:mb-0',
				mobileReverse ? 'mb-0' : 'mb-5'
			]"
			v-html="htmlText"
		></div>
	</div>
</template>

<script>
import { marked } from 'marked'

export default {
	props: {
		mobileReverse: {
			type: Boolean,
			required: true
		},
		reverse: {
			type: Boolean,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		image: {
			type: Object,
			required: true
		},
	},
	computed: {
		htmlText() {
			return marked(this.text, { breaks: true })
		}
	}
}
</script>
