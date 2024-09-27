<template>
  <nav class="nav">
    <div>
      <router-link class="link" v-for="item of items" :key="item.text" :to="item.to">{{
        item.text
      }}</router-link>
    </div>
    <div>
      <span to="#" class="link">Change theme</span>
      <router-link to="#" class="link">Login</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const drawer = ref(false)

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

  padding: 20px;
  background-color: #444;

  .link {
    margin: 10px 20px;
  }
}
</style>
