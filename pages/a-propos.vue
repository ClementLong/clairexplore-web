<template>
	<div>
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
			size="small"
			:image="about.presentation"
		/>
		<Tips :text="about.follow" />
	</div>
</template>

<script lang="ts">
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
	}
}
</script>
