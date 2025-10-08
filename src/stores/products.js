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
                const payload = {
                    product_name: product.product_name,
                    selling_price: product.selling_price,
                    initial_stock: product.initial_stock,
                    expiration_date: product.expiration_date,
                    supplier_info: product.description
                }

                const res = await api.post('/product_view/product/post_product', payload)
                this.products.push(res.data)
                return res.data
            } catch (error) {
                console.error("Error adding product:", error)
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