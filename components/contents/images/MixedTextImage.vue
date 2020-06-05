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
				'flex-1',
				reverse ? 'lg:pr-5 lg:pb-0' : 'lg:pl-5',
				mobileReverse ? 'pb-5' : 'pb-0'
			]"
		>
			<Photo :image="image" />
			<h5 v-if="image.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ image.caption }}</h5>
		</div>
		<div
			:class="[
				'paragraph flex-1 text-lightblack font-body sm:small-container',
				reverse ? 'lg:pl-5' : 'lg:pr-5 lg:pb-0',
				mobileReverse ? 'pb-0' : 'pb-5'
			]"
			v-html="htmlText"
		></div>
	</div>
</template>

<script>
import marked from 'marked'

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
