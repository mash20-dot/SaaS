<template>
  <div class="flex h-screen bg-white text-black font-sans">
    <Sidebar />
    <div class="flex flex-col flex-1 overflow-auto">
      <Navbar />
      <main class="p-4 flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
//import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
</script>