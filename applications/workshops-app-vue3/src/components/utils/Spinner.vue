<template lang="">
  <div class="d-flex justify-content-center mb-3">
    <v-progress-circular color="red" indeterminate></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import useColorProp from '@/composables/useColorProp'
const { props } = useColorProp()
</script>

<script lang="ts">
// import ThemeMixin from '@/mixins/ThemeMixin'

export default {
  name: 'AppSpinner'
  // the ThemeMixin will bring in the theme prop
  //   mixins: [ThemeMixin]
}
</script>

<style lang=""></style>
