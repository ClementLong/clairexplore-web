<template>
	<div class="m-auto pb-5 flex" :class="containerStyle">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="bg-darkwhite lg:p-6 p-2 lg:pb-16 pb-10 shadow relative flex-1"
			:style="polaStyle(index)"
		>
			<img v-if="image.formats.large" :src="MEDIA_URL + image.formats.large.url" :alt="image.alternativeText" class="h-full w-full object-cover">
			<h5
				v-if="image.caption"
				class="absolute left-0 text-lightblack font-heading font-light italic lg:pt-5 px-1 pt-1 lg:text-lg text-xs text-center w-full"
			>
				{{ image.caption }}
			</h5>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			MEDIA_URL: process.env.MEDIA_URL,
		}
	},
	computed: {
		containerStyle() {
			if(this.images.length === 1) {
				return 'small-container'
			} else {
				return 'container'
			}
		}
	},
	methods: {
		polaStyle(index) {
			if(this.images.length > 2) {
				if(index === 0) {
					return 'transform: rotate(-5deg) translate(20px, 25px);'
				} else if (index === 1) {
					return 'transform: rotate(0deg); z-index: 2;'
				} else {
					return 'transform: rotate(5deg) translate(-25px, 20px);'
				}
			} else if(this.images.length > 1) {
				if(index === 0) {
					return 'transform: rotate(-4deg) translate(15px, 10px); height:70vh;'
				} else {
					return 'transform: rotate(2deg) translate(-15px, 10px); height:70vh;'
				}
			} else {
				return ''
			}
		},
	}
}
</script>
