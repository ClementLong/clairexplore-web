<template>
	<div class="pt-12" v-if="data">
		<Tips :text="data.contact.Contact" />
	</div>
</template>

<script lang="ts" setup>
import { contactService } from '~/lib/service';

const { data, error } = await useAsyncData(async() => {
	const contact: any = await contactService()

	return {
			contact: contact.data
	}
})
</script>
