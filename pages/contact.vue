<template>
	<div>
		<Tips :text="contact.Contact" />
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		try {
			const contact = await axios.get(`${process.env.API_URL}/contact`)
			return {
				contact: contact.data,
			}
		} catch {
			return {
				contact: null,
			}
		}
	}
}
</script>
