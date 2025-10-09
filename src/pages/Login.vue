<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <form @submit.prevent="onSubmit" class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <div class="mb-4">
        <label class="block mb-1" for="email">Email</label>
        <input
          v-model="form.email"
          id="email"
          type="email"
          required
          class="w-full border border-gray-300 rounded px-3 py-2"
          :disabled="loading"
        />
      </div>
      <div class="mb-6">
        <label class="block mb-1" for="password">Password</label>
        <input
          v-model="form.password"
          id="password"
          type="password"
          required
          class="w-full border border-gray-300 rounded px-3 py-2"
          :disabled="loading"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark flex justify-center items-center"
        :disabled="loading"
      >
        <span v-if="loading" class="loader mr-2"></span>
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>
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
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    await authStore.login(form)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #22c55e; /* Tailwind green-500 */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>