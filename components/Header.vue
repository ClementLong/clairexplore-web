<template>
	<div class="fixed w-full z-10 bg-white border-b-2 border-darkwhite">
		<header class="hidden md:flex justify-between h-12 items-center container m-auto">
			<nuxt-link class="flex justify-center" to="/">
				<h2 class="h-10">
					<Logo />
				</h2>
			</nuxt-link>
			<nav class="flex items-center justify-around font-body text-lightblack flex-1">
				<nuxt-link class="hover:text-important" to="/blog">
					Articles
				</nuxt-link>
				<nuxt-link class="hover:text-important" to="/destinations">
					Destinations
				</nuxt-link>
				<nuxt-link class="hover:text-important" to="/a-propos">
					A propos
				</nuxt-link>
			</nav>
			<Social />
			<Search />
		</header>
		<div class="flex md:hidden">
			Mobile
		</div>
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			isOpen: false
		}
	}
}
</script>

<style scoped>
	.fill-focus {
		fill: #5C4B51;
	}

	.fill-default {
		fill: #E9E8E3;
	}
</style>
