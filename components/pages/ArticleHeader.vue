<template>
	<div class="text-lightblack">
		<div class="h-50vh md:h-50vh w-full overflow-hidden relative">
			<div ref="background" class="w-full h-50vh md:h-50vh flex items-center" :style="bgStyle">
				<Photo :image="cover" />
			</div>
		</div>
		<h1 class="mt-4 md:mt-12 mb-4 text-3xl font-heading font-bold uppercase text-center px-4">{{ title }}</h1>
		<div class="w-50px h-px bg-lightblack m-auto opacity-50"></div>
		<div class="font-body font-light flex justify-center mt-3">
			<time class="px-2">{{ formatedDate }}</time>
			-
			<h3 class="px-2">{{ location }}</h3>
		</div>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	props: {
		title: {
			type: String,
			required: true
		},
		date: {
			type: String,
			required: true
		},
		location: {
			type: String,
			required: true
		},
		cover: {
			type: Object,
			required: true
		},
	},
	data() {
		return {
			bgPosition: 0
		}
	},
	computed: {
		formatedDate() {
			return moment(this.date).locale('fr').format('Do MMMM YYYY')
		},
		bgStyle() {
			return `transform: translate3d(0, ${this.bgPosition / 2 }px, 0) scale(1.0, 1.0);`
		}
	},
	created () {
		if (process.browser){
			window.addEventListener('scroll', this.scroll)
		}
	},
	destroyed () {
		window.removeEventListener('scroll', this.scroll)
	},
	methods: {
		scroll (event) {
			if(event.target.scrollingElement.scrollTop < 1000) {
				this.bgPosition = event.target.scrollingElement.scrollTop
			}
		}
	}
}
</script>

