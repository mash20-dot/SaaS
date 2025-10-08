<template>
  <MainLayout>
    <!-- Navigation Buttons -->
    <nav class="mb-8 flex flex-wrap gap-4 justify-center md:justify-start">
      <router-link
        to="/dashboard"
        class="btn"
        :class="{ 'bg-primary text-white': isActive('/dashboard') }"
        >Dashboard</router-link
      >
      <router-link
        to="/products"
        class="btn"
        :class="{ 'bg-primary text-white': isActive('/products') }"
        >Products</router-link
      >
      <router-link
        to="/sales"
        class="btn"
        :class="{ 'bg-primary text-white': isActive('/sales') }"
        >Sales</router-link
      >
      <router-link
        to="/analytics"
        class="btn"
        :class="{ 'bg-primary text-white': isActive('/analytics') }"
        >Analytics</router-link
      >
      <router-link
        to="/alerts"
        class="btn"
        :class="{ 'bg-primary text-white': isActive('/alerts') }"
        >Alerts</router-link
      >
    </nav>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-gray-100 p-4 rounded shadow text-center">
        <h3 class="text-lg font-semibold mb-2">Total Products</h3>
        <p class="text-3xl font-bold text-primary">{{ productsCount }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded shadow text-center">
        <h3 class="text-lg font-semibold mb-2">Total Sales</h3>
        <p class="text-3xl font-bold text-primary">{{ totalSales }}</p>
      </div>
      <div class="bg-gray-100 p-4 rounded shadow text-center">
        <h3 class="text-lg font-semibold mb-2">Low Stock Alerts</h3>
        <p class="text-3xl font-bold text-primary">{{ lowStockCount }}</p>
      </div>
    </div>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Products</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300 rounded shadow">
          <thead class="bg-gray-200">
            <tr>
              <th class="py-2 px-4 border-b border-gray-300 text-left">Product Name</th>
              <th class="py-2 px-4 border-b border-gray-300 text-left">Selling Price</th>
              <th class="py-2 px-4 border-b border-gray-300 text-left">Initial Stock</th>
              <th class="py-2 px-4 border-b border-gray-300 text-left">Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productsStore.products" :key="product.id" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b border-gray-300">{{ product.product_name }}</td>
              <td class="py-2 px-4 border-b border-gray-300">{{ formatPrice(product.selling_price) }}</td>
              <td class="py-2 px-4 border-b border-gray-300">{{ product.initial_stock }}</td>
              <td class="py-2 px-4 border-b border-gray-300">{{ formatDate(product.expiration_date) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import { useProductsStore } from '../stores/products'
import { useSalesStore } from '../stores/sales'

const productsStore = useProductsStore()
const salesStore = useSalesStore()
const route = useRoute()

onMounted(async () => {
  await productsStore.fetchProducts()
  await salesStore.fetchSales()
})

const productsCount = computed(() => productsStore.products.length)
const lowStockCount = computed(() => productsStore.products.filter(p => p.stock <= p.lowStockThreshold).length)
const totalSales = computed(() => salesStore.sales.reduce((acc, sale) => acc + sale.amount, 0))

function formatPrice(price) {
  return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }).format(price)
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString()
}

function isActive(path) {
  return route.path === path
}
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition;
  text-decoration: none;
  font-weight: 600;
}
</style>