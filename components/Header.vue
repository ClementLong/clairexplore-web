<template>
	<div class="md:fixed w-full z-30 md:border-b-2 md:border-darkwhite md:bg-white">
		<header class="hidden md:flex justify-between h-12 items-center container m-auto">
			<nuxt-link class="flex justify-center mt-1" to="/">
				<h2 class="h-10">
					<Logo color="black" />
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
		<div class="flex md:hidden absolute justify-between h-12 items-center container m-auto">
			<nuxt-link class="flex justify-center z-50" :class="{ 'fixed': isOpen }" to="/">
				<h2 class="h-10 mt-1">
					<Logo :color="logoColor" />
				</h2>
			</nuxt-link>
			<div class="p-2 top-0 fixed right-0 z-50 bg-white rounded-bl-lg" v-if="!isOpen" @click="isOpen = !isOpen">
				<div class="bar-1"></div>
				<div class="bar-2"></div>
				<div class="bar-3"></div>
			</div>
			<div class="p-2 top-0 fixed right-0 z-50 bg-white rounded-bl-lg" v-else @click="isOpen = !isOpen">
				<div class="bar-1" style="position: absolute; right: 10px; top: 25px; transform: rotate(45deg)"></div>
				<div class="bar-3" style="position: absolute; right: 10px; top: 25px; transform: rotate(-45deg)"></div>
			</div>
			<nav class="fixed top-0 w-full bg-white h-screen p-8 z-40 flex flex-col justify-between" v-if="isOpen">
				<div class="flex flex-col">
					<div class="flex flex-col mt-8 font-body uppercase text-lg">
						<nuxt-link class="p-4 border-b border-t" to="/">
							Accueil
						</nuxt-link>
						<div class="flex justify-between border-b">
							<nuxt-link class="p-4" to="/destinations">
								Destinations
							</nuxt-link>
							<div class="border-l w-16 p-3" @click="openDestination()">
								<div v-html="icon.arrow" :style="!isOpenDestinations ? 'transform: rotate(-90deg)' : ''"></div>
							</div>
						</div>
						<div v-if="isOpenDestinations" class="w-full flex flex-col normal-case">
							<nuxt-link class="p-4 py-2 border-b bg-fakewhite" :to="`/destinations/${ country.slug }`" v-for="country in countries" :key="country.id">
								{{ country.name }}
							</nuxt-link>
						</div>
						<div class="flex justify-between border-b">
							<nuxt-link class="p-4" to="/blog">
								Catégories
							</nuxt-link>
							<div class="border-l w-16 p-3" @click="isOpenCategories = !isOpenCategories">
								<div v-html="icon.arrow" :style="!isOpenCategories ? 'transform: rotate(-90deg)' : ''"></div>
							</div>
						</div>
						<div v-if="isOpenCategories" class="w-full flex flex-col normal-case">
							<nuxt-link class="p-4 py-2 border-b bg-fakewhite" to="/blog/aventure_nature">
								Aventure & Nature
							</nuxt-link>
							<nuxt-link class="p-4 py-2 border-b bg-fakewhite" to="/blog/food_and_drink">
								Bars & Restaurants
							</nuxt-link>
							<nuxt-link class="p-4 py-2 border-b bg-fakewhite" to="/blog/itineraires_de_voyage">
								Itinéraires de voyage
							</nuxt-link>
							<nuxt-link class="p-4 py-2 border-b bg-fakewhite" to="/blog/conseils_de_voyage">
								Conseils de voyage
							</nuxt-link>
							<nuxt-link class="p-4 py-2 border-b bg-fakewhite" to="/blog/a_la_decouverte_de">
								A la découverte de...
							</nuxt-link>
						</div>
						<nuxt-link class="p-4 border-b" to="/a-propos">
							A propos
						</nuxt-link>
						<nuxt-link class="p-4 border-b" to="/contact">
							Contact
						</nuxt-link>
					</div>
				</div>
				<div class="flex flex-col items-center">
					<Social class="mt-8" />
					<Search class="mr-4 mt-8" />
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import arrow from "~/assets/icons/arrow.svg?raw";
import axios from 'axios';

export default {
	data() {
		return {
			icon: {
				arrow,
			},
			isOpen: false,
			isOpenCategories: false,
			isOpenDestinations: false,
			countries: null,
		}
	},
	watch: {
		$route () {
			this.isOpen = false
		}
	},
	computed: {
		logoColor() {
			if(this.isOpen) return 'black'
			else if(this.$route.name == 'index' || this.$route.name == 'article') return 'white'
			return 'black'
		}
	},
	methods: {
		async openDestination() {
			if(this.isOpenDestinations) {
				this.isOpenDestinations = false
			} else {
				const options = await axios.get(`${process.env.API_URL}/options`)
				this.countries = options.data.country
				this.isOpenDestinations = true
			}
		}
	}
}
</script>

<style scoped>
	.nuxt-link-exact-active {
		@apply text-important;
	}

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
