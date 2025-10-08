<template>
  <MainLayout>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Products</h2>
      <button @click="showAddModal = true" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Add Product</button>
    </div>

    <input
      v-model="search"
      type="text"
      placeholder="Search products..."
      class="mb-4 w-full max-w-md border border-gray-300 rounded px-3 py-2"
    />

    <ProductTable
      :products="filteredProducts"
      @edit="onEditProduct"
      @archive="onArchiveProduct"
    />

    <AddProductModal v-if="showAddModal" @close="showAddModal = false" @added="refreshProducts" />
    <EditProductModal v-if="showEditModal" :product="editProduct" @close="showEditModal = false" @edited="refreshProducts" />
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import ProductTable from '../components/ProductTable.vue'
import AddProductModal from '../components/AddProductModal.vue'
import EditProductModal from '../components/EditProductModal.vue'
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()
const search = ref('')
const showAddModal = ref(false)
const showEditModal = ref(false)
const editProduct = ref(null)

onMounted(() => {
  productsStore.fetchProducts()
})

const filteredProducts = computed(() => {
  if (!search.value) return productsStore.products
  const term = search.value.toLowerCase()
  return productsStore.products.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.description?.toLowerCase().includes(term)
  )
})

function refreshProducts() {
  productsStore.fetchProducts()
  showAddModal.value = false
  showEditModal.value = false
}

function onEditProduct(product) {
  editProduct.value = product
  showEditModal.value = true
}

function onArchiveProduct(productId) {
  if (confirm('Are you sure you want to archive this product?')) {
    productsStore.archiveProduct(productId).then(() => {
      productsStore.fetchProducts()
    })
  }
}
</script>