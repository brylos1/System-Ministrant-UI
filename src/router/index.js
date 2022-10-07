/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import CalendarView from '@/views/CalendarView.vue'

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
    component:CalendarView,
    meta:{
      title: "Dyzury"
    }
  },{
    path:"/zbiorki",
    name:"zbiorki",
    component:CalendarView,
    meta:{
      title: "Zbiórki"
    }
  },{
    path:"/skladki",
    name:"skladki",
    component:CalendarView,
    meta:{
      title: "Składki"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
