<template>
	<div>
		<Paragraph
			:text="cgu.CGU"
		/>
	</div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
	async asyncData() {
		try {
			const cgu = await axios.get(`${process.env.API_URL}/cgu`)
			return {
				cgu: cgu.data,
			}
		} catch {
			return {
				cgu: null,
			}
		}
	}
}
</script>
