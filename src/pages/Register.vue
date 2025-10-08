<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <form @submit.prevent="onSubmit" class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>

      <div class="mb-4">
        <label class="block mb-1" for="fullname">Full Name</label>
        <input v-model="form.fullname" id="fullname" type="text" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="email">Email</label>
        <input v-model="form.email" id="email" type="email" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="phone">Phone</label>
        <input v-model="form.phone" id="phone" type="text" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="location">Location</label>
        <input v-model="form.location" id="location" type="text" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="businessName">Business Name</label>
        <input v-model="form.businessName" id="businessName" type="text" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <div class="mb-6">
        <label class="block mb-1" for="password">Password</label>
        <input v-model="form.password" id="password" type="password" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>

      <button type="submit" class="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark">Register</button>

      <p class="mt-4 text-center">
        Already have an account?
        <router-link to="/login" class="text-primary font-semibold hover:underline">Login</router-link>
      </p>

      <p v-if="error" class="mt-3 text-red-600">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const form = reactive({
  fullname: '',
  email: '',
  phone: '',
  location: '',
  businessName: '',
  password: '',
})

const authStore = useAuthStore()
const router = useRouter()
const error = ref('')

async function onSubmit() {
  error.value = ''
  try {
    await authStore.register(form)
    router.push('/login')
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed'
  }
}
</script>
