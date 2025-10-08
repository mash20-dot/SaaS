import { defineStore } from 'pinia'
import api from '../api/axios'
import axios from 'axios'

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

                // Check for different token field names
                this.token = res.data.token || res.data.access_token || res.data.jwt || ''
                this.user = res.data.user || { email: credentials.email }

                if (!this.token) {
                    throw new Error('No token returned from backend')
                }

                localStorage.setItem('token', this.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                return true
            } catch (error) {
                console.error('Login failed:', error)
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
            delete axios.defaults.headers.common['Authorization']
        },
    },
})
