<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white rounded p-6 w-full max-w-md shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Edit Product</h3>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label for="name" class="block mb-1 font-medium">Product Name</label>
          <input v-model="form.name" id="name" type="text" required class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
        <label for="expiration_date" class="block mb-1 font-medium">Expiration Date</label>
        <input
            type="date"
            v-model="form.expiration_date"
            id="expiration_date"
            class="w-full border border-gray-300 rounded px-3 py-2"
        />
        </div>
        <div>
          <label for="price" class="block mb-1 font-medium">Selling Price</label>
          <input v-model.number="form.price" id="selling_price" type="number" min="0" step="0.01" required class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label for="stock" class="block mb-1 font-medium">Initial Stock</label>
          <input v-model.number="form.stock" id="initial_stock" type="number" min="0" required class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div class="flex justify-end space-x-3">
          <button type="button" @click="$emit('close')" class="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100">Cancel</button>
          <button type="submit" class="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark">Save</button>
        </div>
        <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch, toRefs } from 'vue'
import { useProductsStore } from '../stores/products'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
})

const productsStore = useProductsStore()
const error = ref('')

const form = reactive({
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0,
  lowStockThreshold: 0,
})

watch(() => props.product, (newVal) => {
  if (newVal) {
    form.id = newVal.id
    form.name = newVal.name
    form.description = newVal.description || ''
    form.price = newVal.price
    form.stock = newVal.stock
    form.lowStockThreshold = newVal.lowStockThreshold
  }
}, { immediate: true })

async function onSubmit() {
  error.value = ''
  try {
    await productsStore.editProduct(form.id, form)
    $emit('edited')
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to update product'
  }
}
</script>