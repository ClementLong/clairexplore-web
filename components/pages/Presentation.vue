<template>
	<div>
		<img class="w-full" :src="'http://localhost:1337' + cover" alt="Blog de voyage">
		<div class="container m-auto flex items-center pt-5 pb-12">
			<div class="text-center text-lightblack w-1/2 px-8" v-html="introduction">
			</div>
			<div class="w-1/2 px-8">
				<img :src="'http://localhost:1337' + introductionImage" alt="Photo de voyage">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cover: {
			type: String,
			required: true
		},
		introduction: {
			type: String,
			required: true
		},
		introductionImage: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
h2 {
	@apply font-heading font-bold text-3xl pb-5;
}

h3, p {
	@apply font-body;
}
</style>
