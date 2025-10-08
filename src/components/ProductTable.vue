<template>
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-300 px-3 py-2 text-left">Name</th>
        <th class="border border-gray-300 px-3 py-2 text-left">Description</th>
        <th class="border border-gray-300 px-3 py-2 text-left">Price</th>
        <th class="border border-gray-300 px-3 py-2 text-left">Stock</th>
        <th class="border border-gray-300 px-3 py-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="product in products"
        :key="product.id"
        :class="{ 'bg-red-100': product.stock <= product.lowStockThreshold }"
      >
        <td class="border border-gray-300 px-3 py-2">{{ product.name }}</td>
        <td class="border border-gray-300 px-3 py-2">{{ product.description }}</td>
        <td class="border border-gray-300 px-3 py-2">${{ product.price.toFixed(2) }}</td>
        <td class="border border-gray-300 px-3 py-2">{{ product.stock }}</td>
        <td class="border border-gray-300 px-3 py-2 space-x-2">
          <button @click="$emit('edit', product)" class="text-blue-600 hover:underline">Edit</button>
          <button @click="$emit('archive', product.id)" class="text-red-600 hover:underline">Archive</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>