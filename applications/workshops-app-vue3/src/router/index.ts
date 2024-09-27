import { createRouter, createWebHistory } from 'vue-router'

import AppHome from '@/views/Home.vue'
import WorkshopsList from '@/views/WorkshopsList.vue'
import AddWorkshop from '@/views/AddWorkshop.vue'

const WorkshopDetails = () => import('@/views/WorkshopDetails.vue')
const SessionsList = () =>
  import('@/components/workshops/sessions-list/SessionsList.vue')
const RequestSession = () =>
  import('@/components/workshops/request-session/RequestSession.vue')

import PageNotFound from '@/views/PageNotFound.vue'

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
      props: true,
      children: [
        {
          path: '',
          name: 'sessions-list',
          component: SessionsList,
          props: true // the dynamic parameter - id, will be sent as a prop by the router itself
        },
        {
          path: 'add',
          name: 'request-session',
          component: RequestSession
        }
      ]
    },
    // should be the last route
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: PageNotFound
      // redirect: '/'
    }
  ]
})

export default router
