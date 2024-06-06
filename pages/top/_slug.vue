<template>
	<div>
		<swiper ref="topSwiper" class="swiper container relative py-5" :options="swiperOption">
			<swiper-slide v-for="(c, index) in 10" :key="index" ref="slides">
				<div class="flex items-center justify-center w-full">
					{{ c }}
				</div>
			</swiper-slide>
			<div class="swiper-button-prev text-lightblack-important h-8" slot="button-prev"></div>
			<div class="swiper-button-next text-lightblack-important h-8" slot="button-next"></div>
		</swiper>
	</div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
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
	// async asyncData({ params, redirect }) {
	// 	try {
	// 		const options = await axios.get(`${process.env.API_URL}/options`)
	// 		const article = await axios.get(`${process.env.API_URL}/top?slug=${params.article}`)

	// 		if(!article.data.length) {
	// 			redirect('/404')
	// 		}

	// 		return {
	// 			article: article.data[0],
	// 			options: options.data
	// 		}
	// 	} catch {
	// 		return {}
	// 	}
	// },
	// head () {
	// 	return {
	// 		title: this.article.SEO ? this.article.SEO.meta_title : 'Clairexplore',
	// 		meta: [
	// 			{ hid: 'description', name: 'description', content: this.article.SEO ? this.article.SEO.meta_description : 'Clairexplore' },
	// 			{ name: "author", content: 'Clairexplore' },
	// 			{ name: "publisher", content: 'Clairexplore' },

	// 			// Facebook & LinkedIn
	// 			{ name: "og:title", content: this.article.Social ? this.article.Social.title : 'Clairexplore' },
	// 			{ name: "og:description", content: this.article.Social ? this.article.Social.description : 'Clairexplore' },
	// 			{ name: "og:type", content: "website" },
	// 			{ name: "og:url", content: this.$route.path },
	// 			{ name: "og:image", content: this.article.cover.url },
	// 			{ name: "og:site_name", content: 'Clairexplore' },
	// 		]
	// 	}
	// }
}
</script>
