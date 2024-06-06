<template>
	<div class="swiper container relative h-50vh bg-white py-5" :options="swiperOption">
		<div v-for="(image, index) in images" :key="index">
			<div class="flex items-center justify-center w-full bg-white max-h-full max-w-full">
				<Photo :image="image" />
			</div>
		</div>
		<div class="swiper-pagination" slot="pagination"></div>
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</div>
</template>

<script lang="ts">

export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			swiperOption: {
				spaceBetween: 30,
				effect: 'fade',
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	},
}
</script>
