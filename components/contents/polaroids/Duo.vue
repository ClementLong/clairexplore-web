<template>
	<div class="container m-auto pb-5 flex items-center">
		<div class="mr-1 lg:mr-5 flex-1 bg-darkwhite p-6 pb-16 shadow relative">
			<img :src="left" :alt="leftAlt" class="w-full">
			<h5 v-if="leftTitle" class="absolute left-0 text-lightblack font-heading font-bold pt-4 text-xl text-center w-full">{{ leftTitle }}</h5>
		</div>
		<div class="ml-1 lg:ml-5 flex-1 bg-darkwhite p-6 pb-16 shadow relative">
			<img :src="right" :alt="rightAlt" class="w-full">
			<h5 v-if="rightTitle" class="absolute left-0 text-lightblack font-heading font-bold pt-4 text-xl text-center w-full">{{ rightTitle }}</h5>
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
