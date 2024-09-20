<template>
    <div class="bg-white shadow-lg ">
        <div class="text p-9">
            <h2 class="text-slate-950 py-1 font-medium text-lg">Цифровые решения, которые работают на вас</h2>
            <p class="text-slate-700 py-1 font-medium text-base">Мы фокусируемся на функциональности, дизайне и эффективности, чтобы ваш сайт приносил реальные результаты.
                </p>
            <button class="bg-blue-600 hover:bg-blue-700 outline-none px-10 py-3 rounded-full mt-3 text-white text-lg font-medium">Оставить заявку</button>

        </div>
        <img :src="imgsrc" :alt="title" class="w-full object-cover h-[200px]">
    </div>
</template>

<script setup>
    const props = defineProps(['imgsrc', 'title'])
</script>

<style scoped>

</style>