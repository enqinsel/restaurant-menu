import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealDetail from '../views/MealDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/meal/:id',
      name: 'meal-detail',
      component: MealDetail
    }
  ]
})

export default router 