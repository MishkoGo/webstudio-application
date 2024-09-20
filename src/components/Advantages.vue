<template>
    <div class="bg-white">
        <div class="text mt-3">
            <h2 class="text-slate-950 py-1 font-medium text-lg">{{ title }}</h2>
            <ul class="text-slate-700 py-1 font-medium text-base">
                <li>{{ link }}</li>
                <li class="mt-3">{{ link_2 }}</li>
                <li class="mt-3">{{ link_3 }}</li>
            </ul>
         </div>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'link', 'link_2', 'link_3'])
</script>

<style scoped>

</style>