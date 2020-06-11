<template>
			<!-- <div class="small-container m-auto border border-lightblack">
				<div>
					<h3 class="font-heading font-bold text-2xl text-lightblack">
						Catégories
					</h3>
					<p class="font-heading text-lightblack">
						Mes derniers
					</p>
				</div>
				<div class="flex">
					<div
						v-for="category in categories"
						:key="category.id"
						class="ml-2"
					>
						<n-link class="flex justify-between items-stretch" :to="{ path: `/blog/${category.slug}` }">
							<div class="flex items-center justify-center">
								<div class="font-heading text-lightblack px-3 py-1 text-lg text-center">
									{{ category.name }}
								</div>
							</div>
						</n-link>
					</div>
				</div>
			</div> -->
	<div class="flex flex-col h-50vh" ref="bg" :style="bgStyle">
		<!-- <div class="h-50vh" style="background: linear-gradient(180deg, rgb(246, 245, 241) 0%, rgba(246, 245, 241, 0) 20%);"></div> -->
	</div>
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			bgPosition: 0,
			start: 0,
			bgHeight: 0
		}
	},
	computed: {
		bgStyle() {
			console.log(this.start - this.bgPosition - this.bgHeight)
			const scroll = this.start - this.bgPosition - this.bgHeight
			const bgSize = 150 + (scroll / 20)
			if(scroll < 0 && bgSize > 100) {
				return `
					background: url('/images/photo.jpg');
					background-size: ${ bgSize }%;
					background-position: 33% 56%;
					background-repeat: no-repeat;
				`
			} else {
				return `
					background: url('/images/photo.jpg');
					background-size: 100%;
					background-position: 33% 56%;
					background-repeat: no-repeat;
				`
			}
		},
	},
	created () {
		if (process.browser){
			window.addEventListener('scroll', this.scroll)
			window.addEventListener('resize', this.resize)
		}
	},
	mounted() {
		this.resize()
	},
	destroyed () {
		window.removeEventListener('scroll', this.scroll)
		window.removeEventListener('resize', this.resize)
	},
	methods: {
		resize() {
			this.bgHeight = this.$refs.bg.offsetHeight
			this.start = this.$refs.bg.offsetTop - this.bgHeight
		},
		scroll (event) {
			if(event.target.scrollingElement.scrollTop > 1000) {
				this.bgPosition = event.target.scrollingElement.scrollTop
			}
		}
	}
}
</script>
