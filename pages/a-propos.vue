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

const { data, error } = await useAsyncData(async() => {
	const about: any = await aboutService()

	return {
		about: about.data
	}
})

// head () {
// 		return {
// 			title: this.about.SEO.meta_title,
// 			meta: [
// 				{ hid: 'description', name: 'description', content: this.about.SEO.meta_description }
// 			]
// 		}
// 	},
</script>
