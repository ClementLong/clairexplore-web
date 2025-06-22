<template>
    <div class="m-auto p-1 text-center small-container">
        <nuxt-link :to="to" target="_blank"
            class="transition duration-200 text-body font-semibold text-sm text-important border-2 border-important rounded px-4 py-2 hover:text-white hover:bg-important">{{
            text }}</nuxt-link>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    to: string;
    text: string;
}>()
</script>
