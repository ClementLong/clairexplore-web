<template>
	<div class="container m-auto pb-5 flex items-center">
		<div v-if="left" class="pr-1 lg:pr-5 flex-1">
			<Photo v-if="left" :image="left" />
			<h5 v-if="left && left.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ left.caption }}</h5>
		</div>
		<div v-if="right" class="pl-1 lg:pl-5 flex-1">
			<Photo v-if="right" :image="right" />
			<h5 v-if="right && right.caption" class="text-lightblack font-heading font-bold pt-2 text-center">{{ right.caption }}</h5>
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
