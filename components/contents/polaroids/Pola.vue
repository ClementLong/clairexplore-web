<template>
	<div class="m-auto lg:py-5 pb-8 flex" :class="containerStyle">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="pola"
			:class="polaStyle(index)"
		>
			<img :src="polaSrc(image)" :alt="image.alternativeText" loading="lazy" class="h-full w-full object-cover">
			<h5
				v-if="image.caption"
				class="absolute left-0 text-lightblack font-heading font-light italic lg:pt-5 px-1 pt-2 lg:text-lg text-xs text-center w-full"
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
	computed: {
		containerStyle() {
			if(this.images.length === 1) {
				return 'small-container'
			}else if(this.images.length === 3) {
				return 'container flex-wrap lg:flex-no-wrap justify-center overflow-x-hidden lg:overflow-visible'
			} else {
				return 'container'
			}
		}
	},
	methods: {
		polaSrc(image) {
			if(image.formats.large) {
				return image.formats.large.url
			} else if(image.formats.medium) {
				return image.formats.medium.url
			} else {
				return image.url
			}
		},
		polaStyle(index) {
			if(this.images.length > 2) {
				if(index === 0) {
					return 'pola-3-first'
				} else if (index === 1) {
					return 'pola-3-second'
				} else {
					return 'pola-3-third'
				}
			} else if(this.images.length > 1) {
				if(index === 0) {
					return 'pola-2-first'
				} else {
					return 'pola-2-second'
				}
			} else {
				return ''
			}
		},
	}
}
</script>

<style scoped>
	.pola {
		@apply bg-darkwhite p-2 pb-8 shadow relative;
		max-height: 500px;

		@screen lg {
			@apply p-6 pb-16;
		}
	}

	.pola-3-first {
		transform: rotate(-5deg) translate(0, 10px);
		z-index: 2;
		width: 55%;

		@screen lg {
			transform: rotate(-5deg) translate(20px, 25px);
		}
	}

	.pola-3-second {
		transform: rotate(-5deg) translate(0, -10px);
		width: 50%;

		@screen lg {
			transform: rotate(0deg);
			z-index: 2;
		}
	}

	.pola-3-third {
		transform: rotate(5deg) translate(0, -15px);
		width: 50%;

		@screen lg {
			transform: rotate(5deg) translate(-25px, 20px);
		}
	}

	.pola-2-first {
		@apply flex-1;
		transform: rotate(-4deg) translate(15px, 0px);

		@screen lg {

		}
	}

	.pola-2-second {
		@apply flex-1;
		transform: rotate(2deg) translate(-15px, 0px);

		@screen lg {

		}
	}
</style>
