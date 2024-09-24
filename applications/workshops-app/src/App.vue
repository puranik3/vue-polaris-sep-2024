<template>
  <div>
    <app-menu></app-menu>

    <div class="container my-5">
      <app-home></app-home>
      <app-workshops-list></app-workshops-list>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/common/Menu.vue';
import AppHome from '@/components/views/Home.vue';
import AppWorkshopsList from '@/components/views/WorkshopsList.vue'

export default {
  name: 'App',
  components: {
    AppMenu,
    AppHome,
    AppWorkshopsList
  },
}
</script>

<style lang="scss" scoped>
div {
  >span {
    color: crimson;
  }
}
</style>
