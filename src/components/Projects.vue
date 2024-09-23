<template>
   <div class="container mx-auto px-5 lg:px-20 h-[100vh] md:h-[80vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10 mt-[55rem] mb-[55rem]">
        <div class="w-full flex items-center flex-col md:items-start">
            <h1 class=" text-black text-7xl">Projects</h1>
            <p class="text-[1.2rem] w-2/4 text-black my-12 ">SoftTeco is honored to be trusted by international industry leaders and well-established brands. Our clients specifically note the quality of our services and the enthusiasm and dedication of our team. We are proud to have worked with so many great clients and to be part of their digital transformation journey.</p>
            <div class="grid">
					<figure class="effect-lily">
						<img src="../assets/images/Img-supersapiens-min.webp" alt="img12"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Supersapiens</h2>
								<p>An energy management system for athletes</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="../assets/images/waycare-min.webp" alt="img1"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Waycare</h2>
								<p>A comprehensive platform for real-time management of maintenance and emergency urban services</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
                <div class="grid">
					<figure class="effect-lily">
						<img src="../assets/images/c2smart-min.webp" alt="img12"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">C2 SmartLight</h2>
								<p>A system for managing smart outdoor lighting solutions</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                    <figure class="effect-lily">
						<img src="../assets/images/covr-min.webp" alt="img12"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">COVR</h2>
								<p>A security platform for banking and retail</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="../assets/images/golf-min.webp" alt="img1"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Golf Club</h2>
								<p>An AI-powered analyzer of golf players</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
                <div class="grid">
					<figure class="effect-lily">
						<img src="../assets/images/base-operations-min.webp" alt="img12"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Base Operations</h2>
								<p>An application that provides advanced security services</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="../assets/images/gameinsight-min.webp" alt="img1"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Gameinsight</h2>
								<p>An e-learning platform dedicated to European football</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
                <div class="grid">
					<figure class="effect-lily">
						<img src="../assets/images/blueprint-min.webp" alt="img12"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Blueprint</h2>
								<p>A SaaS-based business intelligence solution</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-lily">
						<img src="../assets/images/evoz-min.webp" alt="img1"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">Evoz</h2>
								<p>An advanced solution for baby monitoring and activity tracking</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                    <figure class="effect-lily">
						<img src="../assets/images/momenz-min.webp" alt="img1"/>
						<figcaption>
							<div>
								<h2 class="text-[2rem]">MomenZ</h2>
								<p>A personal assistant in finding nearby restaurants with discounts</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
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
import {defineProps} from 'vue'
const props = defineProps(['name', 'imgsrc', 'visit', 'btnName'])
import About from './About.vue';
</script>

<style scoped>

.grid {
    display: flex;
}
.grid {
    display: flex;
}
.grid figure[data-v-a8c18f60] {
    position: relative;
    float: left;
    overflow: hidden;
    margin: 2px 0.2%;
    width: 65%;
    text-align: center;
    background: #0e1834;
    cursor: pointer;
}

.grid figure figcaption {
	padding: 2em;
	color: white;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
    color: white;
}

figure.effect-lily img {
	max-width: none;
	width: -webkit-calc(100% + 50px);
	width: calc(100% + 50px);
	opacity: 0.5;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-40px,0, 0);
	transform: translate3d(-40px,0,0);
}

figure.effect-lily figcaption {
	text-align: left;
}

figure.effect-lily figcaption > div {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	height: 50%;
}

figure.effect-lily h2,
figure.effect-lily p {
	-webkit-transform: translate3d(0,40px,0);
	transform: translate3d(0,40px,0);
}

figure.effect-lily h2 {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
}

figure.effect-lily p {
	color: white;
	opacity: 0;
	-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
	transition: opacity 0.2s, transform 0.35s;
}
figure.effect-lily:hover img {
    backdrop-filter: blur(10px);
}
figure.effect-lily:hover p {
	opacity: 1;
}

figure.effect-lily:hover img,
figure.effect-lily:hover h2,
figure.effect-lily:hover p {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
    
}

figure.effect-lily:hover p {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
}
</style>