<template>
    <div class="container mx-auto px-5 xl:px-24 my-10 mb-20">
       <div class="text">
            <h1 class="text-blue-700 text-4xl font-bold text-center">Our Prices</h1>
            <p class="text-xl text-center mt-5">At PixelHubs web studio, we carefully study the market to set a fair price for our services while maintaining a high level of work. We work honestly and transparently. We do not charge for minor improvements and services: registration in search engines, installation of counters, basic SEO settings, mail on the domain and much more are already included in the cost of each site.</p>
        </div>
       <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            <div v-for="data in idea" :key="data" class="price-block">
                <PricesBlock :title="data.title" :prices="data.prices" :description="data.description" :links="data.links" />
            </div>
       </div>
    </div>
    <About></About>
    <footer class="header-main flex justify-between items-center bg-[#071739] shadow-md h-[80px] w-[100%] px-5 lg:px-24 relative z-10">
        <div class="text-[15px] text-white  cursor-pointer">
        
          
            Copyright © 2008-2024 PixelHub ®
       
      </div>
      <nav class="flex flex-col md:flex-row  gap-4 md:gap-10 px-6 md:static absolute bg-white md:bg-transparent shadow-md md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full duration-500" :class="[open ? 'top-0' : 'top-[-390%]']">
        <router-link to="/" class="text-slate-500 py-5 hover:text-slate-700 text-[15px] font-medium">Privacy Policy</router-link>
        <router-link to="/about" class="text-slate-500 py-5 hover:text-slate-700 text-[15px] font-medium">Terms of Services</router-link>
        <router-link to="/services" class="text-slate-500 py-5 hover:text-slate-700 text-[15px] font-medium">Impressum</router-link>
        <router-link to="/prices" class="text-slate-500 py-5 hover:text-slate-700 text-[15px] font-medium">Cookie Settings</router-link>
      </nav>
      
    </footer>
</template>

<script setup>
import Card from './Card.vue';
import idea from './idea';
import About from './About.vue';
import PricesBlock from './PricesBlock.vue';
</script>

<style scoped>
.price-block:nth-child(2n){
    background: #071739;
    border-radius: 10px;
}

</style>