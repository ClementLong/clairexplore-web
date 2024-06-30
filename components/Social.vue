<template>
	<div class="flex">
		<a rel="noopener" target="_blank" href="https://www.instagram.com/clairexplore" :class="`flex social mx-1 ${size}`">
			<div class="w-full" v-html="instagram"></div>
		</a>
		<a rel="noopener" target="_blank" href="https://www.facebook.com/clairexplore" :class="`flex social mx-1 ${size}`">
			<div class="w-full" v-html="facebook"></div>
		</a>
		<a rel="noopener" target="_blank" href="https://www.tiktok.com/@clairexplore" :class="`flex social mx-1 ${size}`">
			<div class="w-full" v-html="tiktok"></div>
		</a>
	</div>
</template>

<script lang="ts" setup>
import instagram from '~/assets/icons/instagram.svg?raw'
import facebook from '~/assets/icons/facebook.svg?raw'
import tiktok from '~/assets/icons/tiktok.svg?raw'

const props = withDefaults(defineProps<{
	big?: boolean
}>(), {
	big: false
})

const size = computed(() => props.big ? 'w-12 my-4 mx-4' : 'w-6')
</script>

<style>
.social svg {
	fill: #5C4B51;
}

.social:hover svg {
	fill: #4A9690
}
</style>
