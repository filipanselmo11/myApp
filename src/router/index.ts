import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import NewPage from '../views/NewPage.vue';
import IconPage from '../views/IconPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/new',
    name: 'NewPage',
    component: NewPage
  },
  {
    path: '/icon',
    name: 'IconPage',
    component: IconPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
