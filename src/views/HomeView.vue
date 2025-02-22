<template>
  <div class="max-w-6xl mx-auto">
    
    <div class="mb-12 max-w-2xl mx-auto">
      <input 
        type="text" 
        v-model="searchQuery"
        @input="searchMeals"
        placeholder="Yemek ara..."
        class="search-input text-lg"
      >
    </div>

    
    <div class="mb-12 flex gap-4 flex-wrap justify-center">
      <button
        v-for="category in categories"
        :key="category.idCategory"
        @click="selectCategory(category.strCategory)"
        class="category-button"
      >
        {{ category.strCategory }}
      </button>
    </div>

    
    <div v-if="loading" class="flex justify-center py-12">
      <div class="loading-spinner"></div>
    </div>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class="menu-card"
        @click="goToMealDetail(meal.idMeal)"
      >
        <div class="h-40 overflow-hidden">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="menu-image">
        </div>
        <div class="p-6">
          <h3 class="meal-title">{{ meal.strMeal }}</h3>
          <p class="meal-category">{{ meal.strCategory }}</p>
          <p class="meal-description">{{ meal.strInstructions }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const categories = ref([])
const meals = ref([])
const loading = ref(false)
const searchQuery = ref('')

const fetchCategories = async () => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    categories.value = response.data.categories
  } catch (error) {
    console.error('Kategoriler yüklenirken hata oluştu:', error)
  }
}

const selectCategory = async (category) => {
  loading.value = true
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    meals.value = response.data.meals
  } catch (error) {
    console.error('Yemekler yüklenirken hata oluştu:', error)
  } finally {
    loading.value = false
  }
}

const searchMeals = async () => {
  if (searchQuery.value.length < 2) return
  
  loading.value = true
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`)
    meals.value = response.data.meals || []
  } catch (error) {
    console.error('Arama yapılırken hata oluştu:', error)
  } finally {
    loading.value = false
  }
}

const goToMealDetail = (mealId) => {
  router.push(`/meal/${mealId}`)
}

onMounted(() => {
  fetchCategories()
})
</script> 