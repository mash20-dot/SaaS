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
              <th class="py-2 px-4 border-b border-gray-300 text-left">Remaining Stock</th>
              <th class="py-2 px-4 border-b border-gray-300 text-left">Expiration Date</th>
              <th class="py-2 px-4 border-b border-gray-300 text-center w-20">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productsStore.products" :key="product.id" class="hover:bg-gray-50">
              <!-- Product Name -->
              <td class="py-2 px-4 border-b border-gray-300">
                <template v-if="editRowId === product.id && editField === 'product_name'">
                  <input
                    v-model="editedValue"
                    type="text"
                    class="border rounded px-2 py-1 w-full"
                    @keyup.enter="saveEdit(product.id, 'product_name')"
                    @keyup.esc="cancelEdit"
                    autofocus
                  />
                </template>
                <template v-else>{{ product.product_name }}</template>
              </td>

              <!-- Selling Price -->
              <td class="py-2 px-4 border-b border-gray-300">
                <template v-if="editRowId === product.id && editField === 'selling_price'">
                  <input
                    v-model.number="editedValue"
                    type="number"
                    min="0"
                    step="0.01"
                    class="border rounded px-2 py-1 w-full"
                    @keyup.enter="saveEdit(product.id, 'selling_price')"
                    @keyup.esc="cancelEdit"
                    autofocus
                  />
                </template>
                <template v-else>{{ formatPrice(product.selling_price) }}</template>
              </td>

              <!-- Initial Stock -->
              <td class="py-2 px-4 border-b border-gray-300">
                <template v-if="editRowId === product.id && editField === 'initial_stock'">
                  <input
                    v-model.number="editedValue"
                    type="number"
                    min="0"
                    step="1"
                    class="border rounded px-2 py-1 w-full"
                    @keyup.enter="saveEdit(product.id, 'initial_stock')"
                    @keyup.esc="cancelEdit"
                    autofocus
                  />
                </template>
                <template v-else>{{ product.initial_stock }}</template>
              </td>

              <!-- Remaining Stock -->
              <td class="py-2 px-4 border-b border-gray-300">
                <template v-if="editRowId === product.id && editField === 'remaining_stock'">
                  <input
                    v-model.number="editedValue"
                    type="number"
                    min="0"
                    step="1"
                    class="border rounded px-2 py-1 w-full"
                    @keyup.enter="saveEdit(product.id, 'remaining_stock')"
                    @keyup.esc="cancelEdit"
                    autofocus
                  />
                </template>
                <template v-else>{{ product.remaining_stock }}</template>
              </td>


              <!-- Expiration Date -->
              <td class="py-2 px-4 border-b border-gray-300">
                <template v-if="editRowId === product.id && editField === 'expiration_date'">
                  <input
                    v-model="editedValue"
                    type="date"
                    class="border rounded px-2 py-1 w-full"
                    @keyup.enter="saveEdit(product.id, 'expiration_date')"
                    @keyup.esc="cancelEdit"
                    autofocus
                  />
                </template>
                <template v-else>{{ formatDate(product.expiration_date) }}</template>
              </td>

              <!-- Actions: Pencil or Save/Cancel -->
              <td class="py-2 px-4 border-b border-gray-300 text-center">
                <template v-if="editRowId === product.id">
                  <button
                    @click="saveEdit(product.id, editField)"
                    class="text-green-600 hover:text-green-800 mr-2"
                    title="Save"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  <button
                    @click="cancelEdit"
                    class="text-red-600 hover:text-red-800"
                    title="Cancel"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </template>
                <template v-else>
                  <button
                    @click="startEdit(product.id, 'product_name', product.product_name)"
                    class="text-gray-500 hover:text-primary mr-1"
                    title="Edit Product Name"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                    </svg>
                  </button>
                  <button
                    @click="startEdit(product.id, 'selling_price', product.selling_price)"
                    class="text-gray-500 hover:text-primary mr-1"
                    title="Edit Selling Price"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                    </svg>
                  </button>
                  <button
                    @click="startEdit(product.id, 'initial_stock', product.initial_stock)"
                    class="text-gray-500 hover:text-primary mr-1"
                    title="Edit Initial Stock"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                    </svg>
                  </button>
                  <button
                    @click="startEdit(product.id, 'expiration_date', product.expiration_date)"
                    class="text-gray-500 hover:text-primary"
                    title="Edit Expiration Date"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                    </svg>
                  </button>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
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
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString()
}

function isActive(path) {
  return route.path === path
}

// Editing state
const editRowId = ref(null)
const editField = ref(null)
const editedValue = ref(null)

function startEdit(rowId, field, currentValue) {
  editRowId.value = rowId
  editField.value = field
  // For expiration_date, convert to yyyy-MM-dd for input[type=date]
  if (field === 'expiration_date' && currentValue) {
    const d = new Date(currentValue)
    editedValue.value = d.toISOString().slice(0, 10)
  } else {
    editedValue.value = currentValue
  }
}

function cancelEdit() {
  editRowId.value = null
  editField.value = null
  editedValue.value = null
}

function saveEdit(rowId, field) {
  // TODO: Hook up with backend API to save the updated value
  console.log(`Save edit for row ${rowId}, field ${field}, value:`, editedValue.value)

  // Update productsStore locally for instant UI feedback (optional)
  const productIndex = productsStore.products.findIndex(p => p.id === rowId)
  if (productIndex !== -1) {
    if (field === 'expiration_date') {
      productsStore.products[productIndex][field] = editedValue.value
    } else if (field === 'selling_price' || field === 'initial_stock') {
      productsStore.products[productIndex][field] = Number(editedValue.value)
    } else {
      productsStore.products[productIndex][field] = editedValue.value
    }
  }

  cancelEdit()
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
button:focus {
  outline: none;
}
input:focus {
  outline: 2px solid #22c55e; /* Tailwind green-500 */
  outline-offset: 2px;
}
</style>