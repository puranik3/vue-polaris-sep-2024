import axios from 'axios'
import useAuthStore from '@/store/useAuthStore'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

// @todo Logic can be bettered to prevent hard-coding authenticated requests
axios.interceptors.request.use(
  // this function is called automatically whenever any request goes out
  (request) => {
    const store = useAuthStore()

    if (
      request.url?.includes('workshops') ||
      request.url?.includes('sessions')
    ) {
      request.headers['Authorization'] = `Bearer ${store.token}`
    }

    return request
  },
  (error) => Promise.reject(error)
)
