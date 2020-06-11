<template>
	<div class="text-center py-5" style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,245,241,1) 20%);">
		<p class="font-heading text-lightblack">
			Article par pays
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightblack relative w-64 m-auto">
			<swiper @slideChangeTransitionEnd="changeCountry" ref="countrySwiper" class="swiper container relative py-5" :options="swiperOption">
				<swiper-slide v-for="(c, index) in countries" :key="index" :data-ref="c.slug" ref="slides">
					<div class="flex items-center justify-center w-full">
						{{ c.name }}
					</div>
				</swiper-slide>
				<div class="swiper-button-prev text-lightblack-important h-8" slot="button-prev"></div>
				<div class="swiper-button-next text-lightblack-important h-8" slot="button-next"></div>
			</swiper>
		</h3>
		<div>
			<div class="container m-auto flex flex-wrap pt-4 pb-8">
				<SmallArticlePreview v-for="article in articlesByCountry" :key="article.id" :article="article" :countries="countries" />
			</div>
		</div>
		<Button to="/blog" text="Voir plus d'articles" />
	</div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
	props: {
		articles: {
			type: Array,
			required: true
		},
		countryFilter: {
			type: String,
			required: true
		},
		countries: {
			type: Array,
			required: true
		}
	},
	components: {
		Swiper,
		SwiperSlide
	},
	data() {
		return {
			swiperOption: {
				spaceBetween: 0,
				loop: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
			}
		}
	},
	directives: {
		swiper: directive
	},
	computed: {
		articlesByCountry() {
			return this.articles.filter((article) => {
				return this.countryFilter == article.country
			})
		},
		categoriesBySlug() {
			const currentCountry = this.countries.find((country) => {
				return this.countryFilter == country.slug
			})

			return currentCountry.name
		},
		swiper() {
			return this.$refs.countrySwiper.$swiper
		}
	},
	watch: {
		countryFilter() {
			this.$refs.slides.forEach(element => {
				if(element.$el.getAttribute('data-ref') === this.countryFilter) {
					this.swiper.slideTo(Number(element.$el.getAttribute('data-swiper-slide-index')) + 1, 0, false)
				}
			})
		}
	},
	methods: {
		changeCountry() {
			this.$emit('changeCountry', this.$el.querySelector('.swiper-slide-active').getAttribute('data-ref'))
		}
	}
}
</script>

<style scoped>
.text-lightblack-important {
	color: #5C4B51;
	outline: none;
}

.text-lightblack-important:after {
	font-size: 20px !important;
}

.swipper-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	display: flex;
	transition-property: transform;
	box-sizing: content-box;
}
</style>
