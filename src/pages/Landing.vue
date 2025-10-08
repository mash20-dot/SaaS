<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto flex justify-between items-center py-4 px-6">
        <div class="text-2xl font-bold text-primary">NkwaBiz</div>
        <div class="space-x-4">
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
          <router-link
            to="/pricing"
            class="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >Pricing</router-link
          >
        </div>
      </nav>
    </header>

    <main class="flex-grow bg-white flex flex-col justify-center items-center text-center px-6">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-black">
        Manage Your Business Easily with NkwaBiz
      </h1>
      <p class="max-w-xl text-gray-700 mb-8 text-lg">
        NkwaBiz is a powerful yet simple platform for small and medium businesses to
        manage inventory, record sales, and track performance — all in one place.
      </p>

      <div class="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div class="border rounded shadow p-6">
          <h2 class="text-2xl font-semibold mb-4 text-green-600">Free Features</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-left">
            <li>Secure Login & Registration</li>
            <li>Manage Products (Add & Edit)</li>
            <li>View Dashboard Overview</li>
            <li>Basic Sales Recording</li>
          </ul>
        </div>

        <div class="border rounded shadow p-6">
          <h2 class="text-2xl font-semibold mb-4 text-yellow-600">Premium Features</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-left">
            <li>Archive Products</li>
            <li>Low Stock Alerts with Export to Excel</li>
            <li>Sales History Analytics with Charts</li>
            <li>Export Sales Data to Excel</li>
          </ul>
          <p class="mt-4 font-semibold">
            <router-link to="/pricing" class="text-primary hover:underline">Upgrade now</router-link> for just <span class="text-xl">50 Cedis/month</span>
          </p>
        </div>
      </div>

      <router-link
        to="/register"
        class="inline-block bg-primary text-white px-8 py-3 rounded text-lg font-semibold hover:bg-primary-dark transition"
        >Get Started</router-link
      >
    </main>

    <footer class="bg-gray-100 text-center py-4 text-sm text-gray-600">
      &copy; 2024 NkwaBiz. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// No script logic needed for this static landing page
</script>

<style scoped>
/* Optional styling here */
</style>