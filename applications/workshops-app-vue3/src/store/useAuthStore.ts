import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import { login as loginSvc } from '@/services/auth'
import type { ICredentials } from '@/services/auth'

const KEY_TOKEN = 'token'
const KEY_EMAIL = 'email'
const KEY_ROLE = 'role'

interface State {
  email: string
  role: string
  token: string
}

const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    email: localStorage.getItem(KEY_EMAIL) || '',
    role: localStorage.getItem(KEY_ROLE) || '',
    token: localStorage.getItem(KEY_TOKEN) || ''
  } as State)

  const isAuthenticated = computed(() => {
    return !!state.token
  })

  const isAdmin = computed(() => {
    return state.role === 'admin'
  })

  async function login(credentials: ICredentials) {
    const { authToken, email, role } = await loginSvc(credentials)

    localStorage.setItem(KEY_TOKEN, authToken)
    localStorage.setItem(KEY_EMAIL, email)
    localStorage.setItem(KEY_ROLE, role)

    this.token = authToken
    this.email = email
    this.role = role

    return email
  }

  async function logout() {
    localStorage.removeItem(KEY_TOKEN)
    localStorage.removeItem(KEY_EMAIL)
    localStorage.removeItem(KEY_ROLE)

    this.token = ''
    this.email = ''
    this.role = ''

    // return Promise.resolve()
  }

  const { token, email, role } = toRefs(state)

  return {
    token,
    email,
    role,
    isAuthenticated,
    isAdmin,
    login,
    logout
  }
})

export default useAuthStore
