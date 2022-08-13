/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import DyzuryView from '@/views/DyzuryView.vue'

const routes = [
  { path: '/', redirect: '/kokpit' },
  {
    path: '/kokpit',
    name: 'kokpit',
    component: DashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },{
    path:"/dyzury",
    name:"dyzury",
    component:DyzuryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
