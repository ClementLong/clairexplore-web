<template>
	<div v-if="data">
		<Presentation
			:cover="data.homepage.cover.url"
			:introduction-image="data.homepage.image.url"
			:introduction="data.homepage.introduction"
		/>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'

const countryFilter = ref('FR')
const route = useRoute()

const { data, error } = await useAsyncData(async() => {
	const homepage: any = await axios.get(`${process.env.API_URL}/homepage`)
	const options = await axios.get(`${process.env.API_URL}/options`)
	const articles = await axios.get(`${process.env.API_URL}/articles${process.env.STAGING ? '' : '?published=true'}`)

	return {
			options: options.data,
			articles: articles.data,
			homepage: homepage.data,
		}
})


</script>
