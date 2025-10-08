import { defineStore } from 'pinia'
import api from '../api/axios'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    actions: {
        async fetchProducts() {
            try {
                const res = await api.get('/products')
                this.products = res.data
            } catch (error) {
                throw error
            }
        },
        async addProduct(product) {
            try {
                const res = await api.post('/product_view/product/post_product', product, {
                    headers: { 'Content-Type': 'application/json' },
                })
                this.products.push(res.data)
            } catch (error) {
                console.error('Error adding product:', error)
                throw error
            }
        },



        async editProduct(id, product) {
            try {
                const res = await api.put(`/product/${id}`, product)
                const index = this.products.findIndex(p => p.id === id)
                if (index !== -1) {
                    this.products[index] = res.data
                }
            } catch (error) {
                throw error
            }
        },
        async archiveProduct(id) {
            try {
                await api.delete(`/product/${id}`)
                this.products = this.products.filter(p => p.id !== id)
            } catch (error) {
                throw error
            }
        },
    }
})