<template>
  <nav class="flex justify-between items-center bg-primary text-white px-4 py-3 shadow-md">
    <div class="font-bold text-lg">NkwaBiz</div>
    <div class="flex items-center space-x-4">
      <div v-if="user">{{ user.username }}</div>
      <button @click="logout" class="bg-red-600 hover:bg-red-700 rounded px-3 py-1">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const user = authStore.user

function logout() {
  authStore.logout()
  router.push('/login')
}
</script>