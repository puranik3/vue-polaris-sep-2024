<template>
  <div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import AppMenu from '@/components/common/Menu.vue';

export default {
  name: 'App',
  components: {
    AppMenu
  },
}
</script>

<style lang="scss" scoped>
div {
  > span {
    color: crimson;
  }
}
</style>
