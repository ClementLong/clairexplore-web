<template>
	<div>
		<Header @toggleStop="stopScroll = $event" />
		<div class="md:pt-50px min-h-screen" :class="{ 'fixed': stopScroll }">
			<slot />
		</div>
		<Footer />
	</div>
</template>


<script>
export default {
	data() {
		return {
			stopScroll: false
		}
	}
}
</script>
