<template>
	<div class="flex ml-4 relative text-lightblack">
		<input
			:class="[
				isFocus ? 'border-pink placeholder-pink' : 'border-darkwhite placeholder-lightgrey',
				'outline-none appearance-none rounded-l-lg border-l-2 border-t-2 border-b-2 text-sm px-2 py-1'
			]"
			placeholder="Rechercher..."
			type="text"
			id="search"
			name="search"
			v-model="query"
			@focusin="isFocus = true"
			@focusout="isFocus = false"
			@keypress.enter="search"
		>
		<label
			role="button"
			for="search"
			@click="search"
			:class="[
				isFocus ? 'border-pink' : 'border-darkwhite',
				'outline-none cursor-pointer flex items-center justify-center border-r-2 border-t-2 border-b-2 rounded-r-lg w-6 pr-2'
			]"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 136 136.21852" class="w-full">
				<path class="fill-current" d="M93.148438 80.832031C109.5 57.742188 104.03125 25.769531 80.941406 9.421875S25.878906-1.460938 9.53125 21.632812C-6.816406 44.722656-1.351562 76.691406 21.742188 93.039062c16.480468 11.667969 38.269531 12.566407 55.652343 2.300782l37.769531 37.542968c4.078126 4.292969 10.863282 4.464844 15.15625.386719 4.292969-4.074219 4.464844-10.859375.390626-15.152343-.128907-.136719-.253907-.261719-.390626-.390626zm-41.839844 3.5c-18.246094.003907-33.039063-14.777343-33.050782-33.023437-.003906-18.246094 14.777344-33.039063 33.027344-33.046875 18.222656-.007813 33.007813 14.75 33.042969 32.972656.03125 18.25-14.742187 33.066406-32.996094 33.097656h-.023437zm0 0"/>
			</svg>
		</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isFocus: false,
			query: ''
		}
	},
	methods: {
		search() {
			if(!this.query.length) return
			this.$router.push(`/recherche/${this.query}`)
			this.query = ''
		}
	}
}
</script>
