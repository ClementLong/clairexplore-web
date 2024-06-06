<template>
	<div class="text-center py-5"
		style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,245,241,1) 20%);">
		<p class="font-hand text-xl text-lightblack -mb-2">
			Articles par pays
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightblack relative w-64 m-auto">
			<div @slideChangeTransitionEnd="changeCountry" ref="countrySwiper" class="swiper container relative py-5"
				:options="swiperOption">
				<div v-for="(c, index) in options.country" :key="index" :data-ref="c.slug" ref="slides">
					<div class="flex items-center justify-center w-full">
						{{ c.name }}
					</div>
				</div>
				<div class="swiper-button-prev text-lightblack-important h-8" slot="button-prev"></div>
				<div class="swiper-button-next text-lightblack-important h-8" slot="button-next"></div>
			</div>
		</h3>
		<div>
			<div class="container m-auto flex flex-wrap pt-4 pb-8" :class="[max ? 'justify-center' : 'justify-left']">
				<ArticlePreview v-for="article in articlesByCountry" :key="article.id" :article="article" :options="options"
					:small="true" class="w-full lg:w-1/3" />
			</div>
		</div>
		<Button v-if="max" :to="`/destinations/${countryFilter}`" text="Voir plus d'articles" />
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
	articles: Array<any>
	countryFilter: string
	options: any
	max?: boolean
}>(), {
	max: false
})

const emits = defineEmits(['changeCountry'])

const swiperOption = {
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
}

const articlesByCountry = computed(() => {
	if(!props.articles) return []
	const articlesSortByDate = props.articles.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	})

	const articleList = articlesSortByDate.filter((article) => {
		return props.countryFilter == article.country
	})

	if (props.max) return articleList.slice(0, 3)
	else return articleList
})

const categoriesBySlug = computed(() => {
	const currentCountry = props.options.country.find((country: any) => {
		return props.countryFilter == country.slug
	})

	return currentCountry.name
})

const changeCountry = () => {
	emits('changeCountry', 1)
}

// 	watch: {
// 		countryFilter() {
// 			this.$refs.slides.forEach(element => {
// 				if(element.$el.getAttribute('data-ref') === this.countryFilter) {
// 					this.swiper.slideTo(Number(element.$el.getAttribute('data-swiper-slide-index')) + 1, 0, false)
// 				}
// 			})
// 		}
// 	},
</script>

<style>
.text-lightblack-important {
	color: #5C4B51;
	outline: none;
}

.text-lightblack-important:after {
	font-size: 20px !important;
}
</style>
