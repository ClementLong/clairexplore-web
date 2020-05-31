<template>
	<div
		:class="[
			'container m-auto pb-5 flex items-center',
			reverse ? 'flex-col lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'
		]"
	>
		<div :class="['flex-1', reverse ? 'lg:pr-5 pb-5 lg:pb-0' : 'lg:pl-5']">
			<img :src="image" :alt="alt" class="w-full">
			<h5 v-if="title" class="text-lightblack font-heading font-bold pt-2 text-center">{{ title }}</h5>
		</div>
		<div :class="['flex-1 text-lightblack font-body sm:small-container', reverse ? 'lg:pl-5' : 'lg:pr-5 pb-5 lg:pb-0']">
			{{ text }}
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		reverse: {
			type: Boolean,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		title: {
			type: String,
			default: null
		}
	}
}
</script>
