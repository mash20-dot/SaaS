<template>
  <MainLayout>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Sales</h2>
      <button @click="showAddSale = true" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Record Sale</button>
    </div>

    <table class="w-full border-collapse border border-gray-300 mb-6">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 px-3 py-2">Date</th>
          <th class="border border-gray-300 px-3 py-2">Product Name</th>
          <th class="border border-gray-300 px-3 py-2">Quantity</th>
          <th class="border border-gray-300 px-3 py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in salesStore.sales" :key="sale.id">
          <td class="border border-gray-300 px-3 py-2">{{ new Date(sale.date).toLocaleDateString() }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ sale.product_name }}</td>
          <td class="border border-gray-300 px-3 py-2">{{ sale.quantity }}</td>
          <td class="border border-gray-300 px-3 py-2">${{ sale.amount.toFixed(2) }}</td>
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

async function fetchSales() {
  await salesStore.fetchSales()
}

onMounted(() => {
  fetchSales()
})
</script>