<template>
	<div class="container m-auto pb-5 flex items-center flex-col lg:flex-row">
		<div class="pb-5 lg:pb-0 lg:pr-5 flex-1">
			<Photo :image="left" />
			<h5 v-if="left.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ left.caption }}</h5>
		</div>
		<div class="lg:pl-5 flex-1">
			<Photo :image="right" />
			<h5 v-if="right.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ right.caption }}</h5>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		left: {
			type: Object,
			required: true
		},
		right: {
			type: Object,
			required: true
		},
	}
}
</script>
