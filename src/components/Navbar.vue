<template>
    <header class="header-main flex justify-between items-center bg-white shadow-md h-[80px] w-[100%] px-5 lg:px-24 relative z-10">
      <div class="text-3xl font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer">
        <router-link to="/"> 
          <i class="bi bi-code"></i> 
          PixelHub
        </router-link>
      </div>
      <nav class="flex flex-col md:flex-row p-5 gap-4 md:gap-10 px-6 md:static absolute bg-white md:bg-transparent shadow-md md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full duration-500" :class="[open ? 'top-0' : 'top-[-390%]']">
        <router-link to="/" class="text-slate-500 py-5 hover:text-slate-700 text-xl font-medium">Home</router-link>
        <router-link to="/about" class="text-slate-500 py-5 hover:text-slate-700 text-xl font-medium">About</router-link>
        <router-link to="/projects" class="text-slate-500 py-5 hover:text-slate-700 text-xl font-medium">Projects</router-link>
        <router-link to="/services" class="text-slate-500 py-5 hover:text-slate-700 text-xl font-medium">Services</router-link>
        <router-link to="/prices" class="text-slate-500 py-5 hover:text-slate-700 text-xl font-medium">Prices</router-link>
      </nav>
      <div class="text-4xl text-black cursor-pointer md:hidden z-20" @click="menuOpen">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </div>
    </header>
  </template>

<script setup>
import { RouterLink } from 'vue-router';
import {ref} from 'vue'

const open = ref(false)

const menuOpen = () => {
  open.value = !open.value
}
</script>

<style scoped> 

</style>