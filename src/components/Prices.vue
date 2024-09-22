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
</template>

<script setup>
import Card from './Card.vue';
import idea from './idea';
import PricesBlock from './PricesBlock.vue';
</script>

<style scoped>
.price-block:nth-child(2n){
    background: #071739;
    border-radius: 10px;
}
.price-block h2 {
    color: white !important;
}
</style>