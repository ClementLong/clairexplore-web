<template>
	<div class="small-container m-auto bg-darkwhite rounded my-5 p-4">
		<div class="paragraph text-base md:text-lg text-lightblack font-body p-4 border border-lightblack rounded">
			<p class="text-center text-2xl font-bold font-heading pb-4">Au sommaire de cet article :</p>
			<ol role="list">
				<li v-for="(title, index) in summary" :key="index">
					<nuxt-link :to="`#${title}`">{{ title }}</nuxt-link>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		summary: {
			type: Array,
			required: true,
		}
	},
}
</script>
