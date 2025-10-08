<template>
  <aside class="w-56 bg-gray-100 p-4 flex flex-col space-y-3 border-r border-gray-300">
    <router-link to="/dashboard" class="sidebar-link" active-class="bg-primary text-white">Dashboard</router-link>
    <router-link to="/products" class="sidebar-link" active-class="bg-primary text-white">Products</router-link>
    <router-link to="/sales" class="sidebar-link" active-class="bg-primary text-white">Sales</router-link>
    <router-link to="/analytics" class="sidebar-link" active-class="bg-primary text-white">Analytics</router-link>
    <router-link to="/alerts" class="sidebar-link" active-class="bg-primary text-white">Alerts</router-link>
  </aside>
</template>

<style scoped>
.sidebar-link {
  @apply px-3 py-2 rounded hover:bg-primary hover:text-white transition;
  text-decoration: none;
  color: black;
}
</style>