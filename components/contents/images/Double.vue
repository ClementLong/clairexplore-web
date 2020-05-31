<template>
	<div class="container m-auto pb-5 flex items-center flex-col lg:flex-row">
		<div class="pb-5 lg:pb-0 lg:pr-5 flex-1">
			<img :src="left" :alt="leftAlt" class="w-full">
			<h5 v-if="leftTitle" class="text-lightblack font-heading font-bold pt-2 text-center">{{ leftTitle }}</h5>
		</div>
		<div class="lg:pl-5 flex-1">
			<img :src="right" :alt="rightAlt" class="w-full">
			<h5 v-if="rightTitle" class="text-lightblack font-heading font-bold pt-2 text-center">{{ rightTitle }}</h5>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		left: {
			type: String,
			required: true
		},
		leftAlt: {
			type: String,
			required: true
		},
		leftTitle: {
			type: String,
			default: null
		},
		right: {
			type: String,
			required: true
		},
		rightAlt: {
			type: String,
			required: true
		},
		rightTitle: {
			type: String,
			default: null
		}
	}
}
</script>
