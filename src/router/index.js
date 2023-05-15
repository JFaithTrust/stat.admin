import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import Dashboard from '@/views/DashboardView.vue'
import Main from '@/components/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'authorize',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/main',
        component: Main
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
