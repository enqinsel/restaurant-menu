<template>
  <div class="max-w-6xl mx-auto">
    <div v-if="meal" class="detail-container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="max-w-lg mx-auto w-full">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="detail-image">
        </div>
        
        <div>
          <h1 class="detail-title">{{ meal.strMeal }}</h1>
          <span class="detail-category">{{ meal.strCategory }}</span>
          
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-[#2c3e50]">Malzemeler</h2>
            <ul class="detail-ingredients">
              <li 
                v-for="(ingredient, index) in ingredients" 
                :key="index"
                class="ingredient-item"
              >
                <span class="w-6 h-6 flex items-center justify-center bg-[#d35400]/10 rounded-full text-[#d35400]">
                  {{ index + 1 }}
                </span>
                <span>{{ ingredient.ingredient }} - {{ ingredient.measure }}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-2xl font-semibold mb-4 text-[#2c3e50]">Tarif</h2>
            <p class="text-gray-700 leading-relaxed">{{ meal.strInstructions }}</p>
          </div>
        </div>
      </div>
    </div>

    
    <div v-else class="flex justify-center py-12">
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const meal = ref(null)

const ingredients = computed(() => {
  if (!meal.value) return []
  
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`]
    const measure = meal.value[`strMeasure${i}`]
    
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure: measure || ''
      })
    }
  }
  return ingredients
})

const fetchMealDetail = async () => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
    meal.value = response.data.meals[0]
  } catch (error) {
    console.error('Yemek detayları yüklenirken hata oluştu:', error)
  }
}

onMounted(() => {
  fetchMealDetail()
})
</script> 