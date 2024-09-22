<template>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10 mb-[30rem]">
            <div class="w-full flex items-center flex-col md:items-start">
                <h1 class="text-2xl md:text-4xl text-slate-700 my-1">{{ name }} <br> <strong class="text-blue-700 text-5xl md:text-6xl font-bold">PixelHub Team</strong></h1>
                <p class="text-2xl md:text-4xl text-slate-700 my-1">We are the team of talented developers</p>
                <router-link :to="visit" class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">{{ btnName }}</router-link>
            </div>
            <div class="home">
                <img :src="imgsrc" alt="team-img" class="w-[100%] h-[100%] mt-5">
            </div>
            
    </div>
    <div class="container mx-auto px-5 lg:px-56 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10">
        <div class="w-full flex items-center flex-col md:items-start">
            <h2 class="text-7xl text-[2.8rem] leading-[2.9rem] text-slate-700 my-1 w-6/12 font-medium">Why Choose PixelHub as Your Software Development Company?</h2>
            <br/>
            <hr class="w-full border-t-2 border-gray">
            <div class="w-full flex items-center flex-col md:items-start py-10 skillz">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1">Advanced Expertise</h1>
                <p class="text-2xl md:text-1xl text-[1.1rem] leading-[1.5rem] text-gray-500 !important pt-4 pr-[2rem] w-[70%]">SoftTeco constantly expands its expertise and provides a rich array of services, aimed at meeting any software-related business needs. With top tier professionals on the team, we make sure to bring innovation and value to everything we do.</p>
            </div>
            <hr class="w-full border-t-2 border-gray">
            <div class="w-full flex items-center flex-col md:items-start py-10 skillz">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1">Technology Leadership</h1>
                <p class="text-2xl md:text-1xl text-[1.1rem] leading-[1.5rem] text-gray-500 !important pt-4 pr-[2rem] w-[70%]">With over 500 experts in the company, SoftTeco offers a diverse set of technologies that we are proficient in. We work with both time-tested and innovative technologies, and select the tech stack for every project uniquely.</p>
            </div>
            <hr class="w-full border-t-2 border-gray">
            <div class="w-full flex items-center flex-col md:items-start py-10 skillz">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1">Rich Experience Across Industries</h1>
                <p class="text-2xl md:text-1xl text-[1.1rem] leading-[1.5rem] text-gray-500 !important pt-4 pr-[2rem] w-[70%]">SoftTeco serves clients across various industries, including healthcare, logistics, retail, finances, and education. With such a diverse expertise, we know particular demands of each industry and propose the most value-driven solutions.</p>
            </div>
            <hr class="w-full border-t-2 border-gray">
            <div class="w-full flex items-center flex-col md:items-start py-10 skillz">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1">Proven Success</h1>
                <p class="text-2xl md:text-1xl text-[1.1rem] leading-[1.5rem] text-gray-500 !important pt-4 pr-[2rem] w-[70%]">We always strive for transparency between our company and the clients and hence, we encourage you to discover our most interesting projects in a portfolio. Learn how we transform ideas into advanced tech solutions.</p>
            </div>
            <hr class="w-full border-t-2 border-gray">
            <div class="w-full flex items-center flex-col md:items-start py-10 skillz">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1">Transparency & Integrity</h1>
                <p class="text-2xl md:text-1xl text-[1.1rem] leading-[1.5rem] text-gray-500 !important pt-4 pr-[2rem] w-[70%]">We always strive to fulfill the client’s requirements in a way that brings maximal value and efficiency to your business. Hence, we pay great attention to your contentment with our products and services and are always 100% transparent about our work.</p>
            </div>
            <hr class="w-full border-t-2 border-gray">
            <div class="w-full flex items-center flex-col md:items-start py-10 skillz">
                <h1 class="text-2xl md:text-3xl text-slate-700 my-1">Confidentiality And Security</h1>
                <p class="text-2xl md:text-1xl text-[1.1rem] leading-[1.5rem] text-gray-500 !important pt-4 pr-[2rem] w-[70%]">Being an ISO 27001 company, SoftTeco places utmost importance on the security of your data and your software products. We strictly follow in-house and international standards in software security and regularly conduct security training and audits within the company.</p>
            </div>
            <hr class="w-full border-t-2 border-gray">
        </div>
    </div>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-end gap-10 mt-[25rem]">
        <div class="w-full flex items-center flex-col md:items-start">
            <h1 class=" my-1 mb-11 text-black text-3xl md:text-6xl">Tech Stack</h1>
            <hr class="w-full border-t-2 border-gray">
            <div id="inspire" class="flex mt-[2rem]">
                <div class="w-1/3 pr-4">
                    <div>
                    <button
                            v-for="(item, index) in items"
                            :key="item.tab"
                            @click="tab = index"
                            :class="{' text-blue-700 text-[1.6rem] pl-[30px]': tab === index, ' text-slate-700 text-[1.6rem]': tab !== index}"
                            class="w-full py-2 px-4 text-left rounded transition mb-2 stack"
                        >
                            {{ item.tab }}
                    </button>
                    </div>
                </div>

                <div class="w-2/3">
                    <div>
                        <div
                            v-for="contentItem in filteredItems"
                            :key="contentItem.imgSrc"
                           class="mb-5"
                        >
                        <p class="text-[2.0rem] leading-[2.9rem] text-slate-700 my-1 w-6/12 font-medium">{{ contentItem.content }}</p>
                        <div class="flex space-x-4">
                            <img v-for="image in contentItem.imgSrc" :key="image" :src="image" alt="Image" class="rounded w-28 p-4 border border-gray-300 rounded" />
                        </div>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[40vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-end gap-10 mt-[10rem] mb-[10rem]">
        <div class="w-full flex items-center flex-col md:items-start">
                <h1 class=" my-1 mb-11 text-black text-3xl md:text-6xl">What our clients say</h1>
                <hr class="w-full border-t-2 border-gray">
                <div class="blocc flex mt-10">
                    <div class="img_block">
                        <img src="../assets/images/Gagan-Chaudhari.webp" alt="team-img" class=" w-[85%]">
                    </div>
                    <div class="info-block">                
                        <p class="text-[1.2rem] text-slate-700">Their iOS development skills are really good. The app works and looks great and I am very happy with the support the team was able to provide post launch.</p>
                        <div class="block_founder mt-10">
                            <p class="text-[1rem] font-bold">Co-Founder & CTO, Supersapiens</p>
                            <h4 class="text-[1.5rem] text-blue-700">Gagan Chaudhari</h4>
                        </div>
                    </div>
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
import { ref } from 'vue';
import About from './About.vue';

const tab = ref(0);
const items = ref([
{ 
    tab: 'Backend', 
    content: [
      { 
        content: 'Backend', 
        imgSrc: ['../src/assets/images/Backend1.webp', '../src/assets/images/Backend2.webp', '../src/assets/images/Backend3.webp', '../src/assets/images/Backend4.webp', '../src/assets/images/Backend5.webp', '../src/assets/images/Backend6.webp', '../src/assets/images/Backend7.webp'] 
      },
    ]
  },
  { 
    tab: 'Frontend', 
    content: [
      { 
        content: 'Frontend', 
        imgSrc: ['../src/assets/images/Frontend1-3x.webp', '../src/assets/images/Frontend2-3x.webp', '../src/assets/images/Frontend3-3x.webp', '../src/assets/images/Frontend4-3x.webp', '../src/assets/images/Frontend5-3x.webp', '../src/assets/images/Frontend6-3x.webp', '../src/assets/images/Frontend7-3x.webp']
      },
    ]
  },
  { 
    tab: 'Mobile', 
    content: [
      { 
        content: 'iOS', 
        imgSrc: ['../src/assets/images/ios3x.webp', '../src/assets/images/ios3x-1.webp'] 
      },
      { 
        content: 'Android', 
        imgSrc: ['../src/assets/images/Android3x.webp', '../src/assets/images/Android3x-1-1.webp'] 
      }
    ]
  },
  { 
    tab: 'Database', 
    content: [
      { 
        content: 'SQL', 
        imgSrc: ['../src/assets/images/SQL3x.webp', '../src/assets/images/PostgreSQL3x.webp', '../src/assets/images/MySQL3x.webp', '../src/assets/images/Oracle3x.png', '../src/assets/images/SQLserver3x.webp', '../src/assets/images/azure3x.webp'] 
      },
      { 
        content: 'NoSQL', 
        imgSrc: ['../src/assets/images/mongodb3x.webp', '../src/assets/images/dynamodb3x.webp', '../src/assets/images/redis3x.webp','../src/assets/images/azurecosmos3x.webp','../src/assets/images/arango3x.webp'] 
      },
    ]
  },
  { 
    tab: 'Cloud Solutions', 
    content: [
      { 
        content: 'Cloud Solutions', 
        imgSrc: ['../src/assets/images/cloud13x.webp', '../src/assets/images/cloud23x.webp', '../src/assets/images/cloud33x.webp', '../src/assets/images/cloud43x.webp'] 
      },
    ]
  },
  { 
    tab: 'DevOps', 
    content: [
      { 
        content: 'DevOps', 
        imgSrc: ['../src/assets/images/Devops1.webp', '../src/assets/images/Devops2.webp', '../src/assets/images/Devops3.webp','../src/assets/images/Devops4.webp','../src/assets/images/Devops5.webp', '../src/assets/images/Devops6.webp', '../src/assets/images/Devops7.webp'] 
      },
    ]
  },
  { 
    tab: 'Salesforce', 
    content: [
      { 
        content: 'Salesforce', 
        imgSrc: ['../src/assets/images/Salesforce3x.webp', '../src/assets/images/Salesforce3x-1-1.webp', '../src/assets/images/Salesforce3x-2.webp', '../src/assets/images/Salesforce3x-3.webp'] 
      },
     
    ]
  },
  { 
    tab: 'CMS', 
    content: [
      { 
        content: 'CMS', 
        imgSrc: ['../src/assets/images/Property-1Shopify.webp', '../src/assets/images/Property-1Wordpress.webp', '../src/assets/images/Property-1Magento.webp','../src/assets/images/Property-1Sitecore.webp', '../src/assets/images/Property-1Drupal.webp', '../src/assets/images/CMS-sap.webp'] 
      },
    ]
  },
  { 
    tab: 'QA Automation', 
    content: [
      { 
        content: 'QA Automation', 
        imgSrc: ['../src/assets/images/QA-automation3x.webp', '../src/assets/images/QA-automation3x-1.webp', '../src/assets/images/QA-automation3x-2.webp','../src/assets/images/QA-automation3x-3.webp',] 
      },
    ]
  },
]);

const filteredItems = computed(() => {
  return items.value[tab.value].content;
});

import { defineProps } from 'vue';
import { computed } from 'vue';
const props = defineProps(['name', 'imgsrc', 'visit', 'btnName']);
</script>


<style scoped>
.home {
    animation: up-down 1s alternate infinite;
}
.skillz:hover {
    @apply bg-[#f5f5f5] pl-[30px] transition-all duration-300 ease-in-out;
}
.stack:hover{
    color: rgb(29 78 216 / var(--tw-text-opacity));
    @apply  pl-[30px] transition-all duration-300 ease-in-out;
}
.v-tab {
    max-width: 100% !important;
    
}

@keyframes up-down {
    0% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-10px);
    }
}
</style>