<template>
	<div>
		<Header @toggleStop="stopScroll = $event" />
		<div class="md:pt-50px min-h-screen" :class="{ 'fixed': stopScroll }">
			<slot />
		</div>
		<Footer />
	</div>
</template>


<script lang="ts" setup>
const stopScroll = ref(false)
</script>
