<template>
	<div>
		<div ref="bg" :style="bgStyle" class="relative h-75vh md:h-auto overflow-hidden">
			<img class="md:w-full h-75vh md:h-auto md:static absolute absolute-center transform -translate-x-1/2 md:translate-x-0 w-auto max-w-none" :src="cover" alt="Blog de voyage">
		</div>
		<div class="relative">
			<h1 class="font-heading font-bold text-lightblack text-2xl md:text-3xl text-center px-3">Bienvenue dans mon blog de voyage</h1>
		</div>
		<div class="relative z-10 container m-auto flex flex-col md:flex-row items-center pt-5 md:pt-12 pb-12">
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
			return `transform: translate3d(0, ${ this.imageScrolled * 35 }%, 0) scale(1.0, 1.0) scale(${ this.imageScrolled * 0.1 + 1}); opacity: ${ 1.5 - this.imageScrolled * 1.5};`
		},
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
