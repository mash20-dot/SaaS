<template>
  <MainLayout>
    <h2 class="text-2xl font-bold mb-4">Sales Analytics</h2>
    <div class="mb-4 flex space-x-4">
      <input
        type="date"
        v-model="startDate"
        class="border border-gray-300 rounded px-3 py-2"
        placeholder="Start Date"
      />
      <input
        type="date"
        v-model="endDate"
        class="border border-gray-300 rounded px-3 py-2"
        placeholder="End Date"
      />
      <button @click="filterSales" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Filter</button>
    </div>
    <SalesChart :sales="filteredSales" />
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import SalesChart from '../components/SalesChart.vue'
import { useSalesStore } from '../stores/sales'

const salesStore = useSalesStore()
const startDate = ref('')
const endDate = ref('')

onMounted(() => {
  salesStore.fetchSales()
})

const filteredSales = computed(() => {
  if (!startDate.value && !endDate.value) return salesStore.sales

  return salesStore.sales.filter(sale => {
    const saleDate = new Date(sale.date)
    if (startDate.value && saleDate < new Date(startDate.value)) return false
    if (endDate.value && saleDate > new Date(endDate.value)) return false
    return true
  })
})

function filterSales() {
  // Trigger computed update, no extra action needed
}
</script>