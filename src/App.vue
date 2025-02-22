<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-gradient-to-r from-[#d35400] to-[#e74c3c] shadow-lg py-6">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <router-link 
            v-if="$route.name === 'meal-detail'" 
            to="/" 
            class="text-white hover:text-gray-200 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="2" 
              stroke="currentColor" 
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </router-link>
          <router-link to="/" class="text-3xl font-bold text-white">
            Restoran Menü
          </router-link>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto px-4 py-8 max-w-7xl">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script> 