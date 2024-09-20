<template>
    
            <h1 class="text-blue-700 text-5xl font-bold text-center mt-20">Want to discuss your project?</h1>
          
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[70vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-40">
            
        <div class="w-[70%] flex items-center flex-col md:items-start">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1"> <strong class="text-blue-700 text-3xl md:text-4xl font-bold">Write to us</strong></h1>
                <p class="text-1xl md:text-2xl text-slate-700 my-1">Ask a question or leave a request, and we will respond as soon as possible.</p>
               
                <form name="contactform" @submit.prevent="submitForm" class="grid gap-6 mt-4 w-full" id="contactform" method="post">
    <input type="hidden" name="formid" value="basic">
    
    <div class="col-span-12">
      <input 
        type="text" 
       
        
        autocomplete="name" 
        placeholder="How should I contact you?" 
        required 
        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    
    <div class="col-span-12">
      <input 
        type="email" 
       
        autocomplete="email" 
        placeholder="Your email" 
        required 
        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    
    <div class="col-span-12">
      <input 
        type="tel" 
       
        name="phone" 
        autocomplete="tel" 
        placeholder="Phone number" 
        required 
        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    
    <div class="col-span-12">
      <textarea 
       
        
        rows="3" 
        placeholder="Describe your idea" 
        autocomplete="off" 
        required 
        class="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
    </div>
    
    <div class="col-span-12">
        <button class="bg-blue-600 hover:bg-blue-700 outline-none px-10 py-3 rounded-full mt-3 text-white text-lg font-medium">Send</button>
    </div>
  </form>
            </div>
            <div class="home">
                <h4 class="text-2xl md:text-3xl text-slate-700 my-1 font-bold"> Contacts</h4>
                <p class="text-1xl md:text-xl text-slate-700 my-1">info@insomnia.by</p>
                <p class="text-1xl md:text-xl text-slate-700 my-1">+37529 780 86 94</p>
                <p class="text-1xl md:text-xl text-slate-700 my-1">We are on Telegram</p>
                <p class="text-1xl md:text-xl text-slate-700 my-1">We are on WhatsApp</p>
                <br/>
                <h4 class="text-2xl md:text-3xl text-slate-700 my-1 font-bold"> Address</h4>
                <p class="text-1xl md:text-xl text-slate-700 my-1">We are located in Grodno, working remotely.

You can make an appointment in advance by calling the number provided.</p>
            </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(['name', 'imgsrc', 'visit', 'btnName'])

</script>

<style scoped>
/* .home {
    animation: up-down 1s alternate infinite;
} */

@keyframes up-down {
    0% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-10px);
    }
}
</style>