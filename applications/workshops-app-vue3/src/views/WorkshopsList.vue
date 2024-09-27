<template>
  <div>
    <h1>List of workshops</h1>
    <v-divider class="my-6"></v-divider>

    <div v-if="loading">
      <app-spinner></app-spinner>
    </div>
    <div v-else-if="!loading && error">{{ error.message }}</div>
    <div v-else>
      <v-row>
        <v-col v-for="workshop of workshops" :key="workshop.id" :cols="12" :sm="6" :md="4">
          <workshops-list-item :workshop="workshop"></workshops-list-item>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkshopsListItem from '@/components/workshops/workshops-list-item/WorkshopsListItem.vue'
import useFetch from '@/composables/useFetch'
import { getWorkshops } from '@/services/workshops'
import type { IWorkshop } from '@/services/workshops'
import { ref, watch } from 'vue'

const page = ref(1)

const fetcher = async () => {
  return await getWorkshops(page.value)
}

// like we normally use functions, the composables can be passed arguments for customization
const { loading, error, data: workshops, fetchData } = useFetch<IWorkshop[]>(fetcher, [])

const previous = () => {
  --page.value
}

const next = () => {
  ++page.value
}

watch(page, fetchData)
</script>

<script lang="ts">
export default {
  name: 'WorkshopsList'
}
</script>
