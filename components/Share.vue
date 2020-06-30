<template>
	<div class="fixed bottom-0 right-0 z-10 rounded-tl-lg border-l-2 border-t-2 border-darkwhite flex items-center p-2">
		<p class="text-lightblack text-sm whitespace-no-wrap">
			Partage sur
		</p>
		<a target="_blank" class="share w-6 ml-2" :href="`https://pinterest.com/pin/create/button/?url=${ shareUrl }&media=${ mediaUrl }`">
			<div class="w-full" v-html="icon.facebook"></div>
		</a>
		<a target="_blank" class="share w-6 ml-2" :href="`https://www.facebook.com/sharer/sharer.php?u=${ shareUrl }`">
			<div class="w-full" v-html="icon.facebook"></div>
		</a>
		<a target="_blank" class="share w-6 ml-2" :href="`https://twitter.com/home?status=${ shareUrl }`">
			<div class="w-full" v-html="icon.facebook"></div>
		</a>
	</div>
</template>

<script>
import facebook from '~/assets/icons/facebook.svg?raw'

export default {
	props: {
		mediaUrl: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			icon: {
				facebook,
			}
		}
	},
	computed: {
		shareUrl() {
			return process.env.SITE_URL + this.$route.path
		},
	}
}
</script>

<style>
.share svg {
	fill: #5C4B51;
}

.share:hover svg {
	fill: #4A9690
}
</style>
