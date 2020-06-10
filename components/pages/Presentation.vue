<template>
	<div>
		<div ref="bg" :style="bgStyle" class="relative z-20 h-75vh md:h-auto overflow-hidden">
			<img class="md:w-full h-75vh md:h-auto md:static absolute absolute-center transform -translate-x-1/2 md:translate-x-0 w-auto max-w-none" :src="cover" alt="Blog de voyage">
		</div>
		<div :style="textStyle" class="relative z-10">
			<h1 class="font-heading font-bold text-lightblack text-2xl md:text-3xl text-center px-3">Bienvenue dans mon blog de voyage</h1>
		</div>
		<div class="container m-auto flex flex-col md:flex-row items-center pt-5 md:pt-0 pb-12">
			<div class="text-center text-lightblack flex-1 px-8" v-html="introduction">
			</div>
			<div class="flex-1 px-8">
				<img :src="introductionImage" alt="Photo de voyage">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cover: {
			type: String,
			required: true
		},
		introduction: {
			type: String,
			required: true
		},
		introductionImage: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			bgPosition: 0,
			bgHeight: 0
		}
	},
	mounted() {
		this.bgHeight = this.$refs.bg.offsetHeight
	},
	computed: {
		imageScrolled() {
			return this.bgPosition / (this.bgHeight - 50)
		},
		bgStyle() {
			return `transition: 0.1s; transform: translate3d(0, -${ this.imageScrolled * 22 }%, 0) scale(1.0, 1.0); opacity: ${ 1.2 - this.imageScrolled * 2};`
		},
		textStyle() {
			return `transition: 0.1s; transform: translate3d(0, ${ this.imageScrolled * 150 - this.bgHeight * 0.4 }px, 0) scale(1.0, 1.0); opacity: ${ this.imageScrolled * 10};`
		}
	},
	created () {
		if (process.browser){
			window.addEventListener('scroll', this.scroll)
			window.addEventListener('resize', this.resize)
		}
	},
	destroyed () {
		window.removeEventListener('scroll', this.scroll)
	},
	methods: {
		resize() {
			this.bgHeight = this.$refs.bg.offsetHeight
		},
		scroll (event) {
			console.log(event.target.scrollingElement.scrollTop)
			if(event.target.scrollingElement.scrollTop < 1000) {
				this.bgPosition = event.target.scrollingElement.scrollTop
			}
		}
	}
}
</script>

<style scoped>
h2 {
	@apply font-heading font-bold text-3xl pb-5;
}

h3, p {
	@apply font-body;
}

.absolute-center {
	left: 50%;
}
</style>
