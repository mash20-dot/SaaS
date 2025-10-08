import { defineStore } from 'pinia'
import api from '../api/axios'

export const useSalesStore = defineStore('sales', {
    state: () => ({
        sales: [],
    }),
    actions: {
        async fetchSales() {
            try {
                const res = await api.get('/sales')
                this.sales = res.data
            } catch (error) {
                throw error
            }
        },
        async addSale(sale) {
            try {
                const res = await api.post('/sales', sale)
                this.sales.push(res.data)
            } catch (error) {
                throw error
            }
        }
    }
})