import { createMemoryHistory, createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import DefaultLayout from '@/layout/default.vue'
import Index from '@/pages/index.vue'
import Subject from '@/pages/subject.vue'

const routes:RouteRecordRaw[] = [
  {
    path:'/',
    name:'index',
    component:Index
  },
  {
    path:'/subject',
    name:'subject',
    component:Subject
  },
]
const root:RouteRecordRaw[] = [
  { path: '/', 
    component: DefaultLayout,
    children:routes
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes:root,
})

export default router