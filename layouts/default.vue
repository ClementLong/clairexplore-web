<template>
	<div>
		<Header ref="header" />
		<div class="md:pt-50px min-h-screen" :class="{ 'fixed': $refs.header && $refs.header.isOpen }">
			<nuxt />
		</div>
		<Footer />
	</div>
</template>
