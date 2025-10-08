import axios from 'axios'
import router from '../router'
import { useAuthStore } from '../stores/auth'

const api = axios.create({
    baseURL: 'https://saas-tool-mf02.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor to add JWT token
api.interceptors.request.use(config => {
    const authStore = useAuthStore()
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
}, error => Promise.reject(error))

// Response interceptor to handle unauthorized globally
api.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status === 401) {
        const authStore = useAuthStore()
        authStore.logout()
        router.push('/login')
    }
    return Promise.reject(error)
})

export default api