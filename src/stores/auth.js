import { defineStore } from 'pinia'
import api from '../api/axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || '',
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        async login(credentials) {
            try {
                const res = await api.post('/security/login', credentials)
                this.token = res.data.token
                this.user = res.data.user
                localStorage.setItem('token', this.token)
                return true
            } catch (error) {
                throw error
            }
        },
        async register(credentials) {
            try {
                const res = await api.post('/security/signup', credentials)
                return res.data
            } catch (error) {
                throw error
            }
        },
        logout() {
            this.token = ''
            this.user = null
            localStorage.removeItem('token')
        }
    }
})