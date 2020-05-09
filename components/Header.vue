<template>
	<div class="border-b-2 border-darkwhite">
		<header class="hidden md:flex justify-between h-12 items-center container m-auto">
			<nuxt-link class="flex justify-center lg:w-300px" to="/">
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
			<div class="flex">
				<a href="https://www.instagram.com/clairexplore" class="flex mx-1 w-6">
					<img src="/images/instagram.svg" alt="Instagram" class="w-full">
				</a>
				<a href="https://www.twitter.com/clairexplore" class="flex mx-1 w-6">
					<img src="/images/twitter.svg" alt="Twitter" class="w-full">
				</a>
				<a href="https://www.facebook.com/clairexplore" class="flex mx-1 w-6">
					<img src="/images/facebook.svg" alt="Facebook" class="w-full">
				</a>
				<a href="https://www.youtube.com/channel/UCFfVzez5jEKCZCVT73ogzMQ" class="flex mx-1 w-6">
					<img src="/images/youtube.svg" alt="Youtube" class="w-full">
				</a>
			</div>
			<div class="flex ml-2 relative text-lightblack">
				<input
					class="
						outline-none appearance-none
						rounded-l-lg
						border-l-2 border-t-2 border-b-2 border-darkwhite
						placeholder-lightgrey text-sm px-2 py-1"
					placeholder="Rechercher..."
					type="text"
					id="search"
					name="search"
				>
				<div role="button" class="outline-none cursor-pointer flex items-center justify-center border-r-2 border-t-2 border-b-2 border-darkwhite rounded-r-lg w-6 pr-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 136 136.21852" class="w-full">
						<path class="fill-default" d="M93.148438 80.832031C109.5 57.742188 104.03125 25.769531 80.941406 9.421875S25.878906-1.460938 9.53125 21.632812C-6.816406 44.722656-1.351562 76.691406 21.742188 93.039062c16.480468 11.667969 38.269531 12.566407 55.652343 2.300782l37.769531 37.542968c4.078126 4.292969 10.863282 4.464844 15.15625.386719 4.292969-4.074219 4.464844-10.859375.390626-15.152343-.128907-.136719-.253907-.261719-.390626-.390626zm-41.839844 3.5c-18.246094.003907-33.039063-14.777343-33.050782-33.023437-.003906-18.246094 14.777344-33.039063 33.027344-33.046875 18.222656-.007813 33.007813 14.75 33.042969 32.972656.03125 18.25-14.742187 33.066406-32.996094 33.097656h-.023437zm0 0"/>
					</svg>
				</div>
			</div>
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
