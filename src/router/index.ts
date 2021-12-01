import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Define some routes
const routes = [{ path: '/', component: Home }]

//  Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
