<template>
	<div class="text-center py-5"
		style="background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,245,241,1) 20%);">
		<p class="font-hand text-xl text-lightblack -mb-2">
			Articles par pays
		</p>
		<h3 class="font-heading font-bold text-2xl text-lightblack relative w-64 m-auto">
			<carousel @slide-end="changeCountry" ref="countrySwiper" class="container relative py-5" wrapAround>
				<slide v-for="(c, index) in options.country" :key="index" :data-ref="c.slug" :data-index="index" ref="slides">
					<div class="flex items-center justify-center w-full">
						{{ c.name }}
					</div>
				</slide>
				<template #addons>
					<navigation />
				</template>
			</carousel>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const props = withDefaults(defineProps<{
	articles: Array<any>
	countryFilter: string
	options: any
	max?: boolean
}>(), {
	max: false
})

const emits = defineEmits(['changeCountry'])

const countrySwiper = ref()
const slides = ref()

const articlesByCountry = computed(() => {
	if (!props.articles) return []
	const articlesSortByDate = props.articles.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	})

	const articleList = articlesSortByDate.filter((article) => {
		return props.countryFilter == article.country
	})

	if (props.max) return articleList.slice(0, 3)
	else return articleList
})

const changeCountry = (e: any) => {
	emits('changeCountry', countrySwiper.value.$el.querySelector('.carousel__slide--active').getAttribute('data-ref'))
}

watch(() => props.countryFilter, () => {
	slides.value.forEach((element: any) => {
		if (element.$el.getAttribute('data-ref') === props.countryFilter) {
			console.log(element.$el.getAttribute('data-ref'));

			countrySwiper.value.slideTo(Number(element.$el.getAttribute('data-index')), 0, false)
		}
	})
})
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
