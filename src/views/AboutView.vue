<template>
    <div>
        <TwoinOne :name="'Welcome To About Page'" :imgsrc="home" :visit="'/services'" :btnName="'Services'"/>
    </div>
</template>

<script setup>
import TwoinOne from '@/components/TwoinOne.vue';
import home from '../assets/images/home.png'
</script>

<style scoped>

</style>