<template>
  <MainLayout>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Sales</h2>
      <button @click="showAddSale = true" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Record Sale</button>
    </div>

    <div v-if="errorMessage" class="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded border border-yellow-300 space-y-2">
      <p>{{ errorMessage }}</p>
      <router-link
        to="/pricing"
        class="inline-block text-primary font-semibold underline hover:text-primary-dark"
      >
        View Pricing Plans
      </router-link>
    </div>

    <table v-if="!errorMessage" class="w-full border-collapse border border-gray-300 mb-6">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-3 py-2">Product Name</th>
          <th class="border border-gray-300 px-3 py-2">Quantity</th>
          <th class="border border-gray-300 px-3 py-2">Unit Price</th>
          <th class="border border-gray-300 px-3 py-2">Total Price</th>
          <th class="border border-gray-300 px-3 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in salesStore.sales" :key="sale.id">
          <td class="border border-gray-300 px-3 py-2">{{ sale.product_name }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ sale.quantity }}</td>
          <td class="border border-gray-300 px-3 py-2">${{ sale.unit_price.toFixed(2) }}</td>
          <td class="border border-gray-300 px-3 py-2">${{ sale.total_price.toFixed(2) }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ new Date(sale.date).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>

    <AddSaleModal v-if="showAddSale" @close="showAddSale = false" @added="fetchSales" />
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import { useSalesStore } from '../stores/sales'
import AddSaleModal from '../components/AddSaleModal.vue'

const salesStore = useSalesStore()
const showAddSale = ref(false)
const errorMessage = ref('')

async function fetchSales() {
  errorMessage.value = ''
  try {
    await salesStore.fetchSales()
  } catch (error) {
    if (error.response?.status === 403) {
      errorMessage.value = 'This feature is available for premium users only. Please upgrade your subscription.'
    } else {
      errorMessage.value = 'Failed to load sales data. Please try again later.'
    }
  }
}

onMounted(() => {
  fetchSales()
})
</script>