<template lang="html">
  <div>
    <h1>{{ workshop?.name }}</h1>

    <v-divider class="my-6"></v-divider>

    <div v-if="loading">
      <app-spinner :settings="spinnerSettings"></app-spinner>
    </div>
    <div v-else-if="!loading && error">{{ error.message }}</div>
    <div v-else-if="workshop">
      <v-row>
        <v-col sm="12" md="4">
          <v-img :src="workshop.imageUrl" :alt="workshop.name" cover />
        </v-col>
        <v-col sm="12" md="8">
          <p class="mb-4">
            <small>{{ workshop.startDate }} - {{ workshop.endDate }}</small>
          </p>
          <p class="mb-4">
            <small>{{ workshop.time }}</small>
          </p>
          <div v-html="workshop.description"></div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useFetch from '@/composables/useFetch'

import { getWorkshopById } from '@/services/workshops'
import type { IWorkshop } from '@/services/workshops'

interface Props {
  id: string
}

const props = defineProps<Props>()

const route = useRoute()
console.log(route) // { params: { id: '2' }, ... }

const spinnerSettings = { color: 'green' }

const fetcher = async () => {
  return await getWorkshopById(props.id) // or route.params.id
}

// like we normally use functions, the composables can be passed arguments for customization
const { loading, error, data: workshop } = useFetch<IWorkshop>(fetcher, null)
</script>

<script lang="ts">
export default {
  name: 'WorkshopDetails'
}
/*
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

// we do not have access to "this" in script setup. So we create an explicit setup function
export default defineComponent({
  name: 'WorkshopDetails',
  props: {
    id: {
      type: String
    }
  },
  setup(props, context) {
    // "this" is not available inside setup() script
    console.log(props.id, context) // we get props, emit, attrs; but we do not have $route

    // this composable gives what this.$route gives in Vue 2 (Vue Router 3)
    const route = useRoute()

    console.log(route.params.id)
  }
})
*/
</script>

<style lang=""></style>
