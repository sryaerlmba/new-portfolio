  import { createRouter, createWebHistory } from 'vue-router'
  import Layout from '@/views/Layout.vue'

  const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0, left: 0 };
      }
    },
    routes: [
      {
        path: '/',
        redirect: '/home',
        component: Layout,
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
            component: () => import('@/views/Projects.vue'),
          },
          // {
          //   path: 'skills',
          //   name: 'skills',
          // },
          {
            path: 'contact',
            name: 'contact',
            component: () => import('@/views/Contact.vue'),
          }
        ],
      },
    ],
  })

  export default router
