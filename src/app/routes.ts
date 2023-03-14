import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '../app/layouts/Home.vue'
import Order from '../app/layouts/Order.vue'
import Users from '../app/layouts/Users.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/orders',
    name: 'Orders',
    component: Order
  },

  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
})

export default router