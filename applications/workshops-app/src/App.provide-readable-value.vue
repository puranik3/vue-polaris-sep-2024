<template>
  <div>
    <app-menu></app-menu>

    <div class="container my-5">
      <!--
      <app-home></app-home>
      <app-workshops-list></app-workshops-list>
      -->

      <!-- Hey Vue router! Please show the selected component here... -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/common/Menu.vue';
// import AppHome from '@/components/views/Home.vue';
// import AppWorkshopsList from '@/components/views/WorkshopsList.vue'

export default {
  name: 'App',

  // when we want to provide only readable values...
  provide() {
    return {
      theme: 'dark',
      contrastTheme: this.contrastThemeComputed
    }
  },
  computed: {
    contrastThemeComputed() {
      return this.theme === 'light' ? 'dark' : 'light'
    }
  },

  components: {
    AppMenu,
    // AppHome,
    // AppWorkshopsList
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
