<template>
  <div>
    <h1>List of workshops</h1>
    <v-divider class="my-6"></v-divider>

    <div v-if="loading">
      <app-spinner
        :settings="spinnerSettings"
        data-testid="loading-spinner"
      ></app-spinner>
    </div>
    <div v-else-if="!loading && error" data-testid="loading-error">
      {{ error.message }}
    </div>
    <div v-else>
      <div class="my-6">You are viewing page {{ page }}</div>
      <div class="my-6">
        <v-btn class="mr-2" @click="previous">Previous</v-btn>
        <v-btn class="mr-2" @click="next">Next</v-btn>
      </div>
      <v-row>
        <v-col
          v-for="workshop of workshops"
          :key="workshop.id"
          :cols="12"
          :sm="6"
          :md="4"
          class="d-flex"
        >
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
import useCounter from '@/composables/useCounter'
import { ref, watch } from 'vue'

const {
  page,
  increment: next,
  decrement: previous
} = useCounter(
  () => true, // @todo Validation logic
  () => true // @todo
)

const spinnerSettings = { color: 'green' }

const fetcher = async () => {
  return await getWorkshops(page.value)
}

// like we normally use functions, the composables can be passed arguments for customization
const {
  loading,
  error,
  data: workshops,
  fetchData
} = useFetch<IWorkshop[]>(fetcher, [])

watch(page, fetchData)
</script>

<script lang="ts">
export default {
  name: 'WorkshopsList'
}
</script>
