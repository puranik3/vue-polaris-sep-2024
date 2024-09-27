<template lang="">
  <div class="d-flex justify-content-center mb-3">
    <v-progress-circular :color="props.settings.color" indeterminate></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
// import useColorProp from '@/composables/useColorProp'
import { defineProps } from 'vue'

type Color = string // restrict colors if needed like 'red' | 'green'

interface Props {
  settings: { color: Color }
}

const props = defineProps<Props>()

console.log(props)
</script>

<style lang=""></style>
