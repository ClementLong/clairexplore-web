<template>
	<div class="md:fixed w-full z-30 border-b-2 border-darkwhite md:bg-white">
		<header class="hidden md:flex justify-between h-12 items-center container m-auto">
			<nuxt-link class="flex justify-center mt-1" to="/">
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
		<div class="flex md:hidden justify-between h-12 items-center container m-auto">
			<nuxt-link class="flex justify-center" :class="{ 'fixed z-50': isOpen }" to="/">
				<h2 class="h-10 mt-1">
					<Logo />
				</h2>
			</nuxt-link>
			<div class="p-2 top-0 fixed right-0 z-50 bg-white rounded-bl-lg border-b-2 border-l-2 border-darkwhite" @click="isOpen = !isOpen">
				<div class="bar-1"></div>
				<div class="bar-2"></div>
				<div class="bar-3"></div>
			</div>
			<nav class="fixed top-0 w-full bg-white h-screen p-8 z-40" v-if="isOpen">
				<div class="flex flex-col items-center">
					<div class="flex flex-col items-center mt-8">
						<nuxt-link class="hover:text-important py-4" to="/blog">
							Homepage
						</nuxt-link>
						<nuxt-link class="hover:text-important py-4" to="/blog">
							Articles
						</nuxt-link>
						<nuxt-link class="hover:text-important py-4" to="/destinations">
							Destinations
						</nuxt-link>
						<nuxt-link class="hover:text-important py-4" to="/a-propos">
							A propos
						</nuxt-link>
					</div>
					<Social class="mt-8" />
					<Search class="mr-4 mt-8" />
				</div>
			</nav>
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

	.bar-1 {
		@apply h-1 w-8 mb-2 bg-lightblack rounded;
	}

	.bar-2 {
		@apply h-1 w-8 mb-2 bg-lightblack rounded;
	}

	.bar-3 {
		@apply h-1 w-8 bg-lightblack rounded;
	}
</style>
