  import { createRouter, createWebHistory } from 'vue-router'
  import Layout from '@/views/Layout.vue'
  import nProgress from 'nprogress'
  import 'nprogress/nprogress.css'

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
        path: "/",
        component: Layout,
        children: [
          {
            path: '',
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

  router.beforeEach((to, from, next) => {
    nProgress.start()
    next()
  })

  router.afterEach(() => {
    setTimeout(()=>{
      nProgress.done()
    }, 200)
  })

  export default router
