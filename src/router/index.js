import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homee',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
      ]
    },
  ],
})

export default router
