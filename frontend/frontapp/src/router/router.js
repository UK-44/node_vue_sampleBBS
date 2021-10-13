import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import ThreadPage from '../components/pages/ThreadPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ThreadPage',
    name: 'ThreadPage',
    component: ThreadPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router