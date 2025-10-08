<template>
  <MainLayout>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  </MainLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import { useProductsStore } from '../stores/products'
import { useSalesStore } from '../stores/sales'

const productsStore = useProductsStore()
const salesStore = useSalesStore()

onMounted(async () => {
  await productsStore.fetchProducts()
  await salesStore.fetchSales()
})

const productsCount = computed(() => productsStore.products.length)
const lowStockCount = computed(() => productsStore.products.filter(p => p.stock <= p.lowStockThreshold).length)
const totalSales = computed(() => salesStore.sales.reduce((acc, sale) => acc + sale.amount, 0))
</script>