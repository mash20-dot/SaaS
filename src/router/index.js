import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Products from '../pages/Products.vue'
import Sales from '../pages/Sales.vue'
import Analytics from '../pages/Analytics.vue'
import Alerts from '../pages/Alerts.vue'
import Pricing from '../pages/Pricing.vue'
import Landing from '../pages/Landing.vue'

const routes = [
    { path: '/', redirect: '/landing' }, // Redirect root to landing page (lowercase)
    { path: '/login', component: Login, meta: { guest: true } },
    { path: '/register', component: Register, meta: { guest: true } },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/products', component: Products, meta: { requiresAuth: true } },
    { path: '/sales', component: Sales, meta: { requiresAuth: true } },
    { path: '/analytics', component: Analytics, meta: { requiresAuth: true } },
    { path: '/alerts', component: Alerts, meta: { requiresAuth: true } },
    { path: '/pricing', component: Pricing, meta: { public: true } },  // Public access
    { path: '/landing', component: Landing, meta: { public: true } },  // Public access
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Auth guard
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login')
    } else if (to.meta.guest && authStore.isAuthenticated) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router