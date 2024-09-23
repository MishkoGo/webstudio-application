import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Services from '../components/Services.vue'
import Prices from '@/components/Prices.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Projects.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        { 
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        { 
            path: '/services',
            name: 'services',
            component: Services
        },
        { 
            path: '/prices',
            name: 'Prices',
            component: Prices
        },
        
    ]
})

export default router