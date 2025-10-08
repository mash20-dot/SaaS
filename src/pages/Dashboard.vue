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
              <th class="py-2 px-4 border-b border-gray-300 text-left flex items-center gap-1">
                Product Name
                <button @click="editProductColumn('product_name')" title="Edit Product Name" class="text-gray-500 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                  </svg>
                </button>
              </th>
              <th class="py-2 px-4 border-b border-gray-300 text-left flex items-center gap-1">
                Selling Price
                <button @click="editProductColumn('selling_price')" title="Edit Selling Price" class="text-gray-500 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                  </svg>
                </button>
              </th>
              <th class="py-2 px-4 border-b border-gray-300 text-left flex items-center gap-1">
                Initial Stock
                <button @click="editProductColumn('initial_stock')" title="Edit Initial Stock" class="text-gray-500 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                  </svg>
                </button>
              </th>
              <th class="py-2 px-4 border-b border-gray-300 text-left flex items-center gap-1">
                Expiration Date
                <button @click="editProductColumn('expiration_date')" title="Edit Expiration Date" class="text-gray-500 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                  </svg>
                </button>
              </th>
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

// Handler for edit icon click, pass the column key
function editProductColumn(column) {
  // TODO: Hook this up to your backend edit route or open modal for editing
  console.log('Edit clicked for column:', column)
  // Example: open edit modal with specific field or route to edit page
}
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition;
  text-decoration: none;
  font-weight: 600;
}
button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>