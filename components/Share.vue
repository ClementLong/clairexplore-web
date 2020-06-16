<template>
	<div class="fixed right-0 z-10 bg-lightblack w-8 rounded-l-lg flex flex-col" style="bottom: 200px;">
		<a :href="`https://pinterest.com/pin/create/button/?url=${ shareUrl }&media=${ mediaUrl }`">
			P
		</a>
		<a :href="`https://www.facebook.com/sharer/sharer.php?u=${ shareUrl }`">
			F
		</a>
		<a :href="`https://twitter.com/home?status=${ shareUrl }`">
			T
		</a>
	</div>
</template>

<script>
export default {
	props: {
		mediaUrl: {
			type: String,
			required: true
		}
	},
	computed: {
		shareUrl() {
			return this.$route.path
		},
	}
}
</script>
