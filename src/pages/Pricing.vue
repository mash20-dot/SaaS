<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto flex justify-between items-center py-4 px-6">
        <div class="text-2xl font-bold text-primary">NkwaBiz</div>
        <div class="space-x-4">
          <router-link
            to="/"
            class="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >Home</router-link
          >
          <router-link
            to="/login"
            class="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >Login</router-link
          >
          <router-link
            to="/register"
            class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
            >Register</router-link
          >
        </div>
      </nav>
    </header>

    <main class="flex-grow flex flex-col items-center justify-center px-6 py-12 bg-white">
      <h1 class="text-4xl font-bold mb-6 text-black">Pricing</h1>
      <div class="max-w-md w-full border rounded-lg shadow-lg p-8 text-center">
        <h2 class="text-3xl font-semibold mb-4">Premium Plan</h2>
        <p class="text-5xl font-extrabold mb-4 text-primary">50 Cedis<span class="text-xl font-normal">/month</span></p>
        <ul class="mb-6 text-left text-gray-700 space-y-2">
          <li>✔️ Archive Products</li>
          <li>✔️ Low Stock Alerts with Export</li>
          <li>✔️ Sales History & Analytics</li>
          <li>✔️ Export Sales Data to Excel</li>
          <li>✔️ Priority Support</li>
        </ul>
        <button
          @click="subscribe"
          class="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
        >
          Subscribe Now
        </button>
      </div>
    </main>

    <footer class="bg-gray-100 text-center py-4 text-sm text-gray-600">
      &copy; 2024 NkwaBiz. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
function subscribe() {
  alert('Subscription flow coming soon!')
  // Here you can integrate with payment gateway or subscription API later.
}
</script>

<style scoped>
/* Optional styling */
</style>