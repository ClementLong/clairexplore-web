<template>
	<div class="pt-12">
		<Tips :text="about.intro" />
		<Title
			size="Big"
			text="Trois choses à savoir sur moi : "
		/>
		<Pola
			:images="about.photos"
		/>
		<Paragraph
			:text="about.discover"
		/>
		<Title
			size="Big"
			:text="about.title"
		/>
		<Single
			size="big"
			:image="about.presentation"
		/>
		<Tips :text="about.follow" />
	</div>
</template>

<script>
import axios from 'axios'

export default {
	async asyncData() {
		try {
			const about = await axios.get(`${process.env.API_URL}/about`)
			return {
				about: about.data,
			}
		} catch {
			return {
				about: null,
			}
		}
	},
	head () {
		return {
			title: this.about.SEO.meta_title,
			meta: [
				{ hid: 'description', name: 'description', content: this.about.SEO.meta_description }
			]
		}
	},
}
</script>
