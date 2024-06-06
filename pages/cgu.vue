<template>
	<div v-if="data">
		<Paragraph
			:text="data.cgu.CGU"
		/>
	</div>
</template>

<script lang="ts" setup>
import { cguService } from '~/lib/service';

const { data, error } = await useAsyncData(async() => {
	const cgu: any = await cguService()

	return {
		cgu: cgu.data
	}
})
</script>
