import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Services from '../components/Services.vue'
import Prices from '@/components/Prices.vue'
import About from '@/components/About.vue'

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
            path: '/services',
            name: 'services',
            component: Services
        },
        { 
            path: '/prices',
            name: 'Prices',
            component: Prices
        },
        { 
            path: '/services',
            name: 'services',
            component: Services
        },
    ]
})

export default router