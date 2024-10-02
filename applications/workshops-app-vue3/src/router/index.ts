import { createRouter, createWebHistory } from 'vue-router'

import AppHome from '@/views/Home.vue'
import AppLogin from '@/views/Login.vue'
import WorkshopsList from '@/views/WorkshopsList.vue'
import AddWorkshop from '@/views/AddWorkshop.vue'

const WorkshopDetails = () => import('@/views/WorkshopDetails.vue')
const SessionsList = () =>
  import('@/components/workshops/sessions-list/SessionsList.vue')
const RequestSession = () =>
  import('@/components/workshops/request-session/RequestSession.vue')

import PageNotFound from '@/views/PageNotFound.vue'
import useAuthStore from '@/store/useAuthStore'

const meta = {
  authorize: ['admin', 'general']
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    },
    {
      path: '/workshops',
      name: 'workshops-list',
      component: WorkshopsList,
      // meta: meta
      meta
    },
    {
      path: '/workshops/add',
      name: 'add-workshop',
      component: AddWorkshop,
      meta: {
        authorize: ['admin']
      }
    },
    {
      path: '/workshops/:id',
      name: 'workshop-details',
      component: WorkshopDetails,
      props: true,
      meta,
      children: [
        {
          path: '',
          name: 'sessions-list',
          component: SessionsList,
          props: true, // the dynamic parameter - id, will be sent as a prop by the router itself
          meta
        },
        {
          path: 'add',
          name: 'request-session',
          component: RequestSession,
          meta
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

// Global auth guard
router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  const authorize = to.meta?.authorize

  // Right now, role-based authorization is NOT supported
  if (authorize && !store.isAuthenticated) {
    return next({
      name: 'login'
    })
  } else {
    if (authorize && !authorize.includes(store.role)) {
      return next({
        path: '/'
      })
    }
  }

  next()
})

export default router
