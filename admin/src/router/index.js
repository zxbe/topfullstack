import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        name: 'home',
        path: '/',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
