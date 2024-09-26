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

  // when we want to update the provided value through descendants, we maintain it in data instead, ad we provide getter / setter functions for the value
  provide() {
    return {
      getTheme: () => this.theme,
      toggleTheme: () => this.theme = (this.theme === 'light' ? 'dark' : 'light'),

      // EXERCISE: expose this through a function returning the contrastTheme, and make necessary changes in Home, Menu
      getContrastTheme: () => this.contrastThemeComputed
    }
  },
  data() {
    return {
      theme: 'dark'
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
