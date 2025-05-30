import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: HomeView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: 'experience',
          name: 'experience',
          component: () => import('@/views/Experience.vue'),
        },
        {
          path: 'education',
          name: 'education',
          component: () => import('@/views/Education.vue'),
        },
        {
          path: 'projects',
          name: 'projects',
        },
        {
          path: 'skills',
          name: 'skills',
        },
        {
          path: 'contact',
          name: 'contact',
        }
      ],
    },
  ],
})

export default router
