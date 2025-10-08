<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white rounded p-6 w-full max-w-md shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Record Sale</h3>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label for="product" class="block mb-1 font-medium">Product Name</label>
          <select v-model="form.productId" id="product_name" required class="w-full border border-gray-300 rounded px-3 py-2">
            <option value="" disabled>Select product</option>
            <option v-for="product in productsStore.products" :key="product.id" :value="product.id">{{ product.name }}</option>
          </select>
        </div>
        <div>
          <label for="quantity" class="block mb-1 font-medium">Quantity</label>
          <input v-model.number="form.quantity" id="quantity" type="number" min="1" required class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div class="flex justify-end space-x-3">
          <button type="button" @click="$emit('close')" class="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100">Cancel</button>
          <button type="submit" class="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark">Record</button>
        </div>
        <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useSalesStore } from '../stores/sales'
import { useProductsStore } from '../stores/products'

const salesStore = useSalesStore()
const productsStore = useProductsStore()

const form = reactive({
  productId: '',
  quantity: 1,
})

const error = ref('')

onMounted(() => {
  productsStore.fetchProducts()
})

async function onSubmit() {
  error.value = ''
  try {
    const product = productsStore.products.find(p => p.id === form.productId)
    if (!product) {
      error.value = 'Invalid product selected'
      return
    }
    const saleData = {
      productId: form.productId,
      quantity: form.quantity,
      amount: product.price * form.quantity,
      date: new Date().toISOString(),
    }
    await salesStore.addSale(saleData)
    $emit('added')
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to record sale'
  }
}
</script>