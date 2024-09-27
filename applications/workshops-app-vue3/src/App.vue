<template>
  <app-menu></app-menu>

  <v-container>
    <router-view />
  </v-container>
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

<style>
body {
  text-align: left !important;
}
</style>
