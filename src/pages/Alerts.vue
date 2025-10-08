<template>
  <MainLayout>
    <h2 class="text-2xl font-bold mb-4">Low Stock Alerts</h2>
    <button @click="exportLowStock" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark mb-4">Export to Excel</button>
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-3 py-2">Name</th>
          <th class="border border-gray-300 px-3 py-2">Stock</th>
          <th class="border border-gray-300 px-3 py-2">Low Stock Threshold</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in lowStockProducts" :key="product.id" class="bg-red-100">
          <td class="border border-gray-300 px-3 py-2">{{ product.name }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ product.stock }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ product.lowStockThreshold }}</td>
        </tr>
      </tbody>
    </table>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { useProductsStore } from '../stores/products'
import api from '../api/axios'

const productsStore = useProductsStore()
const lowStockProducts = ref([])

async function fetchLowStock() {
  await productsStore.fetchProducts()
  lowStockProducts.value = productsStore.products.filter(p => p.stock <= p.lowStockThreshold)
}

async function exportLowStock() {
  try {
    const response = await api.get('/export/low-stock', { responseType: 'blob' })
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'low_stock.xlsx')
    document.body.appendChild(link)
    link.click()
    link.remove()
  } catch (err) {
    alert('Failed to export low stock data')
  }
}

onMounted(() => {
  fetchLowStock()
})
</script>