<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <form @submit.prevent="onSubmit" class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>

      <div class="mb-4">
        <label class="block mb-1" for="firstname">First Name</label>
        <input 
          v-model="form.firstname" 
          id="firstname" 
          type="text" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="lastname">Last Name</label>
        <input 
          v-model="form.lastname" 
          id="lastname" 
          type="text" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="email">Email</label>
        <input 
          v-model="form.email" 
          id="email" 
          type="email" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="phone">Phone</label>
        <input 
          v-model="form.phone" 
          id="phone" 
          type="text" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="location">Location</label>
        <input 
          v-model="form.location" 
          id="location" 
          type="text" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <div class="mb-4">
        <label class="block mb-1" for="business_name">Business Name</label>
        <input 
          v-model="form.business_name" 
          id="business_name" 
          type="text" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <div class="mb-6">
        <label class="block mb-1" for="password">Password</label>
        <input 
          v-model="form.password" 
          id="password" 
          type="password" 
          required 
          :disabled="loading"
          class="w-full border border-gray-300 rounded px-3 py-2 disabled:bg-gray-100 disabled:cursor-not-allowed" 
        />
      </div>

      <button 
        type="submit" 
        :disabled="loading"
        class="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <span v-if="!loading">Register</span>
        <span v-else class="flex items-center">
          <svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Registering...
        </span>
      </button>

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
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  location: '',
  business_name: '',
  password: '',
})

const authStore = useAuthStore()
const router = useRouter()
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  loading.value = true
  
  try {
    await authStore.register(form)
    router.push('/login')
  } catch (err) {
    error.value = err.response?.data?.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>