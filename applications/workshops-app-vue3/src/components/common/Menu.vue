<template>
  <nav class="nav">
    <div v-if="isAuthenticated">
      <router-link
        class="link"
        active-class="link-active"
        v-for="item of items"
        :key="item.text"
        :to="item.to"
        >{{ item.text }}</router-link
      >
    </div>
    <div>
      <div v-if="isAuthenticated">
        <span to="#" class="link">Change theme</span>
        <span to="#" class="link" @click="logout">Logout</span>
      </div>
      <div v-if="!isAuthenticated">
        <router-link
          :to="{ name: 'login' }"
          class="link"
          active-class="link-active"
          >Login</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import useAuthStore from '@/store/useAuthStore'

const drawer = ref(false)

const store = useAuthStore()
const { isAuthenticated, isAdmin } = storeToRefs(store)

const items = [
  {
    text: 'Home',
    to: {
      name: 'home'
    }
  },
  {
    text: 'List of workshops',
    to: {
      name: 'workshops-list'
    }
  },
  {
    text: 'Add a workshop',
    to: {
      name: 'add-workshop'
    }
  }
]

const router = useRouter()

function logout() {
  store.logout()
  router.push({
    name: 'login'
  })
}
</script>

<script lang="ts">
export default {
  name: 'AppMenu',
  created() {
    console.log(this.$vuetify)
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 20px;
  background-color: #444;

  > * {
    margin-bottom: 0.25em;
  }

  .link {
    margin: 0 20px;
    text-decoration: none;
    cursor: pointer;

    &.link-active {
      text-decoration: underline;
    }
  }
}
</style>
