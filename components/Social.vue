<template>
	<div class="flex">
		<a rel="noopener" target="_blank" href="https://www.instagram.com/clairexplore" :class="`flex social mx-1 ${size}`">
			<div class="w-full" v-html="icon.instagram"></div>
		</a>
		<a rel="noopener" target="_blank" href="https://www.facebook.com/clairexplore" :class="`flex social mx-1 ${size}`">
			<div class="w-full" v-html="icon.facebook"></div>
		</a>
		<a rel="noopener" target="_blank" href="https://www.tiktok.com/@clairexplore" :class="`flex social mx-1 ${size}`">
			<div class="w-full" v-html="icon.tiktok"></div>
		</a>
	</div>
</template>

<script>
import instagram from '~/assets/icons/instagram.svg?raw'
import facebook from '~/assets/icons/facebook.svg?raw'
import tiktok from '~/assets/icons/tiktok.svg?raw'

export default {
	props: {
		big: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			icon: {
				instagram,
				facebook,
				tiktok
			}
		}
	},
	computed: {
		size() {
			return this.big ? 'w-12 my-4 mx-4' : 'w-6'
		}
	}
}
</script>

<style>
.social svg {
	fill: #5C4B51;
}

.social:hover svg {
	fill: #4A9690
}
</style>
