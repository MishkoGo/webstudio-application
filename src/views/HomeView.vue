<template>
    <div>
        <TwoinOne :name="'Grow Your Bussiness With'" :imgsrc="home" :visit="'/about'" :btnName="'Get Started'"/>
    </div>
</template>

<script setup>
import TwoinOne from '@/components/TwoinOne.vue';
import home from '../assets/images/home.png'
</script>
 
<style scoped>

</style>