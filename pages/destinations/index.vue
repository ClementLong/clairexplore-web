<template>
	<div v-if="data">
		<WorldMap :countryFilter="countryFilter" :visited="data.options.country" @changeCountry="countryFilter = $event" />
		<ArticleByCountry @changeCountry="countryFilter = $event" :countryFilter="countryFilter" :options="data.options" class="-mt-16 md:-mt-16" />
	</div>
</template>

<script lang="ts" setup>
import { optionsService } from '~/lib/service';

const countryFilter = ref('FR')

const { data } = await useAsyncData(async () => {
	const options = await optionsService()

	return {
		options: options.data,
	}
})

</script>
