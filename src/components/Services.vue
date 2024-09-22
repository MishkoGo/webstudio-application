<template>
    <div class="conm">
        <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10 ">
                <div class="w-full flex items-center flex-col md:items-start">
                    <h1 class=" text-[4rem] w-3/4 leading-[4rem] text-white my-1">Explore SoftTeco’s Services</h1>
                    <p class="text-[1rem] w-3/4  text-white my-7 ">Tap into digitization and explore new business opportunities that partnership with SoftTeco brings. You give us your big idea – we turn it into a powerful solution aimed at covering all your tech needs.</p>
                    <button class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">Request a consultation
                    </button>
                </div>
                <div class="home">
                    <img src="../assets/images/vue-file-with-vetur.png" alt="team-img" class="w-[100%] h-[100%] mt-5">
                </div>
        </div>
    </div>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-end gap-10 mt-[12rem]">
        <div class="w-full flex items-center flex-col md:items-start">
            <h1 class=" text-black text-3xl md:text-6xl">Discover Our Services</h1>
            <p class="text-[1rem] w-2/4 text-black my-12 ">Tap into digitization and explore new business opportunities that partnership with SoftTeco brings. You give us your big idea – we turn it into a powerful solution aimed at covering all your tech needs.</p>
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
                            <p class="text-[1.0rem] leading-[1.5rem] text-slate-700 my-1 w-3/4 ">{{ contentItem.description }}</p>
                        </div>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-end gap-10 mt-[10rem]">
        <div class="w-full flex items-center flex-col md:items-start">
            <h1 class=" text-black text-3xl md:text-6xl">Why Partner With PixelHub?</h1>
            <p class="text-[1rem] w-2/4 text-black my-12 ">With over 15 years of experience and more than 350 successfully delivered projects, our development team at SoftTeco knows how to bring value through digitization. We deliver reliable BFSO solutions to fintech startups and major banks and always pay great attention to customization in order to create truly unique products.</p>
            <div class="container w-full flex flex-wrap">
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-gray-400 mb-2">01</p>
                <hr class="w-[80%] border-t-2 border-gray">
                <h2 class="text-black text-[2rem] mt-5">Security</h2>
                <p class="text-[1rem] w-3/4 text-black my-5">Being an ISO 27001 certified company, SoftTeco always adheres to security best practices and follows rigid security policies.</p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-gray-400 mb-2">02</p>
                <hr class="w-[80%] border-t-2 border-gray">
                <h2 class="text-black text-[2rem] mt-5">Quality</h2>
                <p class="text-[1rem] w-3/4 text-black my-5">SoftTeco’s developers have solid experience and knowledge in various tools and tech stacks, most commonly used for developing fintech solutions.</p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-gray-400 mb-2">03</p>
                <hr class="w-[80%] border-t-2 border-gray">
                <h2 class="text-black text-[2rem] mt-5">Efficiency</h2>
                <p class="text-[1rem] w-3/4 text-black my-5">By following Agile methodology and software development best practices, we always deliver the results strictly on time and in frictionless manner.</p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-gray-400 mb-2">04</p>
                <hr class="w-[80%] border-t-2 border-gray">
                <h2 class="text-black text-[2rem] mt-5">Experience</h2>
                <p class="text-[1rem] w-3/4 text-black my-5">Starting from 2008, SoftTeco has been consistently exploring and adapting new technologies in order to provide high-quality software to our clients.</p>
              </div>
            </div>
        </div>

    </div>
    <div class="conm">
      <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[120vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10 mt-[10rem]">
        <div class="w-full flex items-center flex-col md:items-start">
            <h1 class=" text-white text-3xl md:text-6xl">Our Development Process</h1>
            <div class="container w-full flex flex-wrap">
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-blue-500 mb-2">01</p>
                <hr class="w-[80%] border-t-2 border-blue-500">
                <h2 class="text-white text-[2rem] mt-5">Analysis and requirements collection </h2>
                <p class="text-[1rem] w-3/4 text-white my-5">We start with collecting the project requirements and performing an all-round analysis, including market and competitor research. After that, we will suggest the most suitable solution in terms of budget, deadline, and team composition. </p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-blue-500 mb-2">02</p>
                <hr class="w-[80%] border-t-2 border-blue-500">
                <h2 class="text-white text-[2rem] mt-5">Design and architecture </h2>
                <p class="text-[1rem] w-3/4 text-white my-5">The next stage is product design. Our UX/UI team will provide wireframes and prototypes to visualize how the product will look and function. We will also design a scalable architecture that would allow your project to grow in the future.</p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-blue-500 mb-2">03</p>
                <hr class="w-[80%] border-t-2 border-blue-500">
                <h2 class="text-white text-[2rem] mt-5">Development</h2>
                <p class="text-[1rem] w-3/4 text-white my-5">Our team will write robust and secure code in adherence to software development best practices. During coding, we will perform code reviews and continuous testing and we will take care of integrating your solution with all needed applications and systems.</p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-blue-500 mb-2">04</p>
                <hr class="w-[80%] border-t-2 border-blue-500">
                <h2 class="text-white text-[2rem] mt-5">Quality assurance</h2>
                <p class="text-[1rem] w-3/4 text-white my-5">In order to ensure the highest level of security, we perform continuous testing and combine both automated and manual testing methods to achieve the best results. Our approach to QA ensures that the app looks and functions equally great.</p>
              </div>
              <div class="w-2/4 mt-8">
                <p class="text-[1.2rem] w-2/4 text-blue-500 mb-2">05</p>
                <hr class="w-[80%] border-t-2 border-blue-500">
                <h2 class="text-white text-[2rem] mt-5">Support and maintenance</h2>
                <p class="text-[1rem] w-3/4 text-white my-5">After the product release, SoftTeco offers support and maintenance services to help you maintain the high performance of the product and ensure there are no bugs or issues. We also offer user and staff training, if needed.</p>
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
import Serdata from './serData';
import Card from './Card.vue';
import About from './About.vue';

const tab = ref(0);
const items = ref([
{ 
    tab: 'IT Consulting', 
    content: [
      { 
        content: 'IT Consulting', 
        description: 'Embrace innovation with SoftTeco’s IT consulting services and bring the power of tech into your business. From planning to implementation, our team will guide you through digital transformation, leaving no unresolved issues behind. We understand how challenging it can be to adopt digitization and implement new technologies into your existing ecosystem. This is why we are here – to help businesses navigate the process and maximize the value that digital transformation will bring through advanced IT business consulting.'
      },
    ]
  },
  { 
    tab: 'Software Development', 
    content: [
      { 
        content: 'Software Development', 
        description: 'Are you looking for innovative software solutions to take your business to the next level? SoftTeco offers full-cycle software services to clients from various industries, helping you to save time and find professionals for your specific projects or tasks at a reasonable cost. With 15 years of experience, SoftTeco provides a wide range of software development services that are tailored to meet your unique needs. '
       },
    ]
  },
  { 
    tab: 'Web Development', 
    content: [
      { 
        content: 'Web Development', 
         description: 'With +15 years of web experience, SoftTeco offers a full range of Web Development Services aimed at meeting the clients’ and global audience needs. Our developers build top-notch web solutions that are feature-rich, speedy, scalable, and compatible with a wide range of browsers and devices. You will reinforce your business’ digital presence with our solutions. '
      },
    ]
  },
  { 
    tab: 'Mobile App Development', 
    content: [
      { 
        content: 'Mobile App Development', 
         description: 'Discover new business opportunities with powerful and user-centric mobile apps delivered by one of the leading providers in the industry. With 15+ years of experience, SoftTeco offers full-cycle mobile app development services for clients of any kind, from seasoned enterprises to aspiring startups. '
      }
    ]
  },
  { 
    tab: 'UI/UX Design', 
    content: [
      { 
        content: 'UI/UX Design', 
         description: 'With SoftTeco’s top-notch UI/ UX design services, you will effortlessly bring your idea to life from scratch or rebuild your existing design. With 15+ years of experience, we communicate your brand’s value through engaging, intuitive, and user-centric UI/UX solutions that help businesses grow and stand out in the global marketplace.'
      },
    ]
  },
  { 
    tab: 'Quality Assurance', 
    content: [
      { 
        content: 'Quality Assurance', 
         description: 'SoftTeco’s software testing services are aimed at perfecting every aspect of your software product: from the way it looks to the way it performs. We understand how even the smallest bug can impact user experience, and we put all our expertise and knowledge into ensuring the highest quality of your applications.'
      },
    ]
  },
  { 
    tab: 'Salesforce Development', 
    content: [
      { 
        content: 'Salesforce Development', 
         description: 'Being a recognized Salesforce partner and having rich experience in setting up and configuring various Clouds, SoftTeco can help you implement the cloud of choice in your existing system to support and leverage your processes.'
      },
     
    ]
  },
  { 
    tab: 'DevOps Services', 
    content: [
      { 
        content: 'DevOps Services', 
         description: 'SoftTeco offers extensive DevOps services that are aimed at optimizing your current operations and speeding up the delivery process. Whether you need a CI/CD implementation or Cloud integration, we are ready to help.'
      },
    ]
  },
  { 
    tab: 'Support and Maintenance', 
    content: [
      { 
        content: 'Support and Maintenance', 
        description: 'Our services do not end on the app’s release – SoftTeco offers support and maintenance to help you maintain the high quality of your app’s performance and timely resolve any potential issues without disrupting user experience.'
      },
    ]
  },
]);

const filteredItems = computed(() => {
  return items.value[tab.value].content;
});

import { defineProps } from 'vue';
import { computed } from 'vue';
</script>

<style scoped>
.conm {
    background: #071739;
}
</style>