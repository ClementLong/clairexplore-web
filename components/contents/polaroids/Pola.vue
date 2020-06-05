<template>
	<div
		:class="[
			'm-auto pb-5 flex',
			images.length === 1 ? 'small-container' : 'container',
		]"
	>
		<div
			v-for="(image, index) in images"
			:key="index"
			class="bg-darkwhite p-6 pb-16 shadow relative flex-1"
		>
			<Photo :image="image" />
			<h5
				v-if="image.caption"
				class="absolute left-0 text-lightblack font-heading font-bold pt-4 text-xl text-center w-full"
			>
				{{ image.caption }}
			</h5>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		images: {
			type: Array,
			required: true
		}
	}
}
</script>
