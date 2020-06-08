import { RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        name: 'home',
        path: '/',
        component: async () => import('../views/Home.vue')
      },
      {
        name: 'operate',
        path: '/operate',
        component: async () => import('../views/Operate.vue')
      }
    ]
  }
]

export default routes
