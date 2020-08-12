<template>
	<div>
		<div class="flex flex-col h-50vh will-change-background" ref="bg" :style="bgStyle">
			<div
				class="h-50vh flex justify-center items-center text-center font-heading text-darkwhite font-bold text-3xl"
				style="background: linear-gradient(180deg, rgb(246, 245, 241) 0%, rgba(246, 245, 241, 0) 30%); text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);"
			>
				La vie ce n'est pas seulement respirer, c'est avoir le souffle coupé
			</div>
		</div>
		<div>
			<div class="container m-auto py-8">
				<div class="flex flex-col items-center">
					<p class="font-hand text-xl text-lightblack -mb-4">
						Trier par
					</p>
					<h3 class="font-heading font-bold text-2xl text-lightblack">
						Catégories
					</h3>
				</div>
				<div class="flex flex-wrap justify-between mt-6">
					<div
						v-for="category in categories"
						:key="category.id"
						class="flex justify-center w-1/2 md:w-1/3 lg:w-1/6"
					>
						<n-link class="flex justify-between items-stretch icons" :to="{ path: `/blog/${category.slug}` }">
							<div class="flex flex-col items-center justify-center">
								<div class="w-16 mt-6 mb-4" v-html="icon['_' + category.slug]"></div>
								<div class="font-heading font-bold px-3 py-1 text-lg text-center hover:text-important">
									{{ category.name }}
								</div>
							</div>
						</n-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import _itineraires_de_voyage from "~/assets/icons/itineraires_de_voyage.svg?raw";
import _aventure_nature from "~/assets/icons/aventure_nature.svg?raw";
import _a_la_decouverte_de from "~/assets/icons/a_la_decouverte_de.svg?raw";
import _conseils_de_voyage from "~/assets/icons/conseils_de_voyage.svg?raw";
import _20photos from "~/assets/icons/20photos.svg?raw";
import _food_and_drink from "~/assets/icons/food_and_drink.svg?raw";

export default {
	props: {
		categories: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			icon: {
				_itineraires_de_voyage,
				_aventure_nature,
				_a_la_decouverte_de,
				_conseils_de_voyage,
				_20photos,
				_food_and_drink,
			},
			bgPosition: 0,
			start: 0,
			bgHeight: 0
		}
	},
	computed: {
		bgStyle() {
			const scroll = this.start - this.bgPosition - this.bgHeight
			const bgSize = 55 + (scroll / 60)
			if(scroll < 0) {
				return `
					background: url('/images/photo.jpg');
					background-size: cover;
					background-position: center ${ bgSize }%;
					background-repeat: no-repeat;
				`
			} else {
				return `
					background: url('/images/photo.jpg');
					background-size: cover;
					background-position: center 56%;
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

<style>
	.will-change-background {
		will-change: background;
	}

	.icons {
		color: #5C4B51;
	}

	.icons:hover {
		color: #4A9690;
	}

	.icons svg {
		width: 100%;
		fill: #5C4B51;
	}

	.icons:hover svg {
		fill: #4A9690;
	}
</style>
