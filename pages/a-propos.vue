<template>
	<div class="pt-12" v-if="data">
		<Tips :text="data.about.intro" />
		<Title
			size="Big"
			text="Trois choses à savoir sur moi : "
		/>
		<Pola
			:images="data.about.photos"
		/>
		<Paragraph
			:text="data.about.discover"
		/>
		<Title
			size="Big"
			:text="data.about.title"
		/>
		<Single
			size="big"
			:image="data.about.presentation"
		/>
		<Tips :text="data.about.follow" />
	</div>
</template>

<script lang="ts" setup>
import { aboutService } from '~/lib/service';
const route = useRoute()

const { data, error } = await useAsyncData(async() => {
	const about: any = await aboutService()

	useSeoMeta({
		title: about.data.SEO.meta_title,
		ogTitle: about.data.SEO.meta_title,
		description: about.data.SEO.meta_description,
		ogDescription: about.data.SEO.meta_description,
		ogType: 'website',
		ogUrl: route.path,
		ogSiteName: 'Clairexplore'
	})

	return {
		about: about.data
	}
})
</script>
