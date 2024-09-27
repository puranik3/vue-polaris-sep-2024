<template lang="html">
  <v-card class="w-100 pa-6">
    <v-img :height="200" cover :src="workshop.imageUrl" :alt="workshop.name" contain />
    <v-card-item>
      <v-card-title>{{ workshop.name }}</v-card-title>

      <v-card-subtitle>
        <div>{{ workshop.startDate }} - {{ workshop.endDate }}</div>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text v-html="workshop.description"></v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { IWorkshop } from '@/services/workshops'

export default defineComponent({
  name: 'WorkshopsListItem',
  props: {
    workshop: {
      type: Object as PropType<IWorkshop>
    }
  }
})
</script>

<style lang="scss"></style>
