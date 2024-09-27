import { createRouter, createWebHistory } from 'vue-router'

import AppHome from '@/views/Home.vue'
import WorkshopsList from '@/views/WorkshopsList.vue'
import AddWorkshop from '@/views/AddWorkshop.vue'
import WorkshopDetails from '@/views/WorkshopDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/workshops',
      name: 'workshops-list',
      component: WorkshopsList
    },
    {
      path: '/workshops/add',
      name: 'add-workshop',
      component: AddWorkshop
    },
    {
      path: '/workshops/:id',
      name: 'workshop-details',
      component: WorkshopDetails,
      props: true
    }
  ]
})

export default router
