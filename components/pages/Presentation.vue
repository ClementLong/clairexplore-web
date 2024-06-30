<template>
	<div class="w-full overflow-hidden">
		<div ref="bg" :style="bgStyle" class="transition duration-75 relative h-75vh md:h-auto overflow-hidden will-change">
			<img
				class="md:w-full h-75vh md:h-auto md:static absolute absolute-center transform -translate-x-1/2 md:translate-x-0 w-auto max-w-none"
				:src="cover" alt="Blog de voyage">
		</div>
		<div class="relative">
			<h1 class="font-heading font-bold text-lightblack text-2xl md:text-3xl text-center px-3">Bienvenue sur mon blog de
				voyage&nbsp;!</h1>
		</div>
		<div class="relative z-10 container m-auto flex flex-col md:flex-row items-center pt-5 md:pt-12 pb-12">
			<div class="text-center text-lightblack flex-1 px-8" v-html="htmlText">
			</div>
			<div class="flex-1 px-8 pt-5 md:pt-0">
				<img src="/images/pola_homepage.png" alt="Photos de voyage">
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { marked } from 'marked'

const props = defineProps<{
	cover: string
	introduction: string
	introductionImage: string
}>()

const bgPosition = ref(0)
const bgHeight = ref(0)
const bg = ref()

onMounted(() => {
	bgHeight.value = bg.value.offsetHeight

	if (process.browser){
		window.addEventListener('scroll', scroll)
		window.addEventListener('resize', resize)
	}
})

onBeforeUpdate(() => {
	bgHeight.value = bg.value.offsetHeight
})

const imageScrolled = computed(() =>
	bgPosition.value / (bgHeight.value - 50)
)

const bgStyle = computed(() =>
	`transform: translate3d(0, ${imageScrolled.value * 35}%, 0) scale(1.0, 1.0) scale(${imageScrolled.value * 0.1 + 1}); opacity: ${1.5 - imageScrolled.value * 1.75};`
)

const htmlText = computed(() =>
	marked(props.introduction)
)

const	resize = () => {
	bgHeight.value = bg.value.offsetHeight
}

const scroll = (event: any) => {
	if(event.target.scrollingElement.scrollTop < 1000) {
		bgPosition.value = event.target.scrollingElement.scrollTop
	}
}

onUnmounted(() => {
	window.removeEventListener('scroll', scroll)
	window.removeEventListener('resize', resize)
	bgPosition.value = 0
})
</script>

<style scoped>
h2 {
	@apply font-heading font-bold text-3xl pb-5;
}

h3,
p {
	@apply font-body;
}

.absolute-center {
	left: 50%;
}

.will-change {
	will-change: transform;
}
</style>
