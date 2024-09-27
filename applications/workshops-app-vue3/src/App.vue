<template>
  <app-menu></app-menu>

  <router-view></router-view>
  <v-container> </v-container>
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router'
import AppMenu from '@/components/common/Menu.vue'
</script>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style scoped></style>
