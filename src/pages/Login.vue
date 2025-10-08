<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <form @submit.prevent="onSubmit" class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email</label>
        <input v-model="form.email" id="email" type="email" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div class="mb-6">
        <label class="block mb-1" for="password">Password</label>
        <input v-model="form.password" id="password" type="password" required class="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <button type="submit" class="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark">Login</button>
      <p class="mt-4 text-center">
        Don't have an account?
        <router-link to="/register" class="text-primary font-semibold hover:underline">Register</router-link>
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
  email: '',
  password: '',
})

const authStore = useAuthStore()
const router = useRouter()
const error = ref('')

async function onSubmit() {
  error.value = ''
  try {
    await authStore.login(form)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  }
}
</script>