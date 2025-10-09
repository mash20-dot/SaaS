<template>
  <div class="min-h-screen flex flex-col bg-white">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav class="container mx-auto flex justify-between items-center py-4 px-6">
        <div class="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">NkwaBiz</div>
        <div class="space-x-4 flex items-center">
          <router-link
            to="/login"
            class="px-4 py-2 text-gray-700 hover:text-primary transition-colors"
            >Login</router-link
          >
          <router-link
            to="/pricing"
            class="px-4 py-2 text-gray-700 hover:text-primary transition-colors"
            >Pricing</router-link
          >
          <router-link
            to="/register"
            class="px-6 py-2.5 bg-gradient-primary text-white rounded-xl font-medium hover:shadow-glow transition-all duration-300"
            >Register</router-link
          >
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="container mx-auto px-6 py-20 text-center">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Business Management Made 
            <span class="bg-gradient-primary bg-clip-text text-transparent">Simple</span>
          </h1>
          <p class="max-w-2xl mx-auto text-gray-600 mb-10 text-xl leading-relaxed">
            Stop juggling spreadsheets and paper records. NkwaBiz gives you complete control over inventory, sales, and business insights in one powerful platform designed for African entrepreneurs.
          </p>
          <div class="flex gap-4 justify-center">
            <router-link
              to="/register"
              class="inline-block bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-glow transition-all duration-300"
              >Get Started Free</router-link
            >
            <router-link
              to="/pricing"
              class="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/5 transition-all duration-300"
              >View Pricing</router-link
            >
          </div>
        </div>
      </section>

      <!-- Core Purpose Section -->
      <section class="container mx-auto px-6 py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Built for Ghana's Growing Businesses</h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you run a retail shop, wholesale business, or online store, NkwaBiz adapts to your workflow and scales with your success.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Smart Inventory Control</h3>
              <p class="text-gray-600 leading-relaxed">
                Track every item in real-time. Know exactly what you have, what's running low, and what's most profitable. Never lose stock or miss a sale again.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Effortless Sales Recording</h3>
              <p class="text-gray-600 leading-relaxed">
                Record transactions instantly. Track who bought what, when they bought it, and how much you earned. Access your complete sales history anytime, anywhere.
              </p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-success to-success-dark rounded-xl flex items-center justify-center mb-6 mx-auto">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Actionable Business Insights</h3>
              <p class="text-gray-600 leading-relaxed">
                See your business performance at a glance. Understand trends, identify your best sellers, and make data-driven decisions that drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem-Solution Section -->
      <section class="container mx-auto px-6 py-16">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Stop Losing Money to Poor Record Keeping</h2>
              <div class="space-y-4 text-gray-600">
                <p class="flex items-start gap-3">
                  <span class="text-danger mt-1 font-bold">✕</span>
                  <span>Manual records lead to errors and lost sales data</span>
                </p>
                <p class="flex items-start gap-3">
                  <span class="text-danger mt-1 font-bold">✕</span>
                  <span>No clear picture of what's selling and what's not</span>
                </p>
                <p class="flex items-start gap-3">
                  <span class="text-danger mt-1 font-bold">✕</span>
                  <span>Running out of popular items costs you customers</span>
                </p>
                <p class="flex items-start gap-3">
                  <span class="text-danger mt-1 font-bold">✕</span>
                  <span>Difficult to track profitability and plan ahead</span>
                </p>
              </div>
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-6">NkwaBiz Solves This</h3>
              <div class="space-y-4 text-gray-600">
                <p class="flex items-start gap-3">
                  <span class="text-success mt-1 font-bold">✓</span>
                  <span>Automated tracking eliminates manual errors</span>
                </p>
                <p class="flex items-start gap-3">
                  <span class="text-success mt-1 font-bold">✓</span>
                  <span>Visual analytics show exactly what's working</span>
                </p>
                <p class="flex items-start gap-3">
                  <span class="text-success mt-1 font-bold">✓</span>
                  <span>Smart alerts notify you before items run out</span>
                </p>
                <p class="flex items-start gap-3">
                  <span class="text-success mt-1 font-bold">✓</span>
                  <span>Comprehensive reports guide better decisions</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="container mx-auto px-6 py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-8">Free Features</h2>
              <p class="text-gray-600 mb-6 text-lg">Everything you need to get started, completely free.</p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Secure Account</span>
                    <p class="text-gray-600 text-sm">Your data is protected with enterprise-level security</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Unlimited Products</span>
                    <p class="text-gray-600 text-sm">Add and manage as many products as you need</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Sales Recording</span>
                    <p class="text-gray-600 text-sm">Track every transaction with ease</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Dashboard Overview</span>
                    <p class="text-gray-600 text-sm">View key business metrics at a glance</p>
                  </div>
                </li>
              </ul>
              <router-link
                to="/register"
                class="inline-block mt-8 border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
                >Start Free</router-link
              >
            </div>

            <div class="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
              <div class="inline-block bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Most Popular
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Premium Features</h2>
              <p class="text-gray-600 mb-2 text-lg">Unlock powerful tools for serious growth.</p>
              <p class="text-2xl font-bold text-gray-900 mb-6">GH₵ 50<span class="text-base font-normal text-gray-600">/month</span></p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">All Free Features</span>
                    <p class="text-gray-600 text-sm">Plus everything below</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Product Archiving</span>
                    <p class="text-gray-600 text-sm">Keep your inventory organized and clean</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Low Stock Alerts</span>
                    <p class="text-gray-600 text-sm">Get notified and export alerts to Excel</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Advanced Analytics</span>
                    <p class="text-gray-600 text-sm">Interactive charts and detailed insights</p>
                  </div>
                </li>
                <li class="flex items-start gap-3 text-gray-700">
                  <svg class="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span class="font-semibold text-gray-900">Excel Export</span>
                    <p class="text-gray-600 text-sm">Download complete sales history anytime</p>
                  </div>
                </li>
              </ul>
              <router-link
                to="/pricing"
                class="inline-block mt-8 bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
                >Upgrade to Premium</router-link
              >
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="container mx-auto px-6 py-20">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of Ghanaian entrepreneurs who are already running smarter, more profitable businesses with NkwaBiz.
          </p>
          <router-link
            to="/register"
            class="inline-block bg-gradient-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-glow transition-all duration-300"
            >Get Started Today</router-link
          >
          <p class="text-gray-600 text-sm mt-4">No credit card required. Cancel anytime.</p>
        </div>
      </section>
    </main>

    <footer class="bg-gray-50 border-t border-gray-200 text-center py-6 text-sm text-gray-600">
      <div class="container mx-auto px-6">
        <p>&copy; 2024 NkwaBiz. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script logic needed for this static landing page
</script>

<style scoped>
/* Optional styling here */
</style>