<template lang="">
  <div>
    <h3 class="mb-2">{{ session.name }}</h3>
    <div>{{ session.abstract }}</div>
    <div class="my-3">{{ session.speaker }}</div>
    <div>{{ session.level }}</div>
    <div class="mt-2">
      <app-voting-widget
        :votes="session.upvoteCount"
        @downvote="_emits('downvote', { id: session.id })"
        @upvote="_emits('upvote', { id: session.id })"
      >
      </app-voting-widget>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISession } from '@/services/sessions'

const _emits = defineEmits<{
  downvote: [event: { id: number }]
  upvote: [event: { id: number }]
}>()

const props = defineProps<{ session: ISession }>()
</script>

<script lang="ts">
export default {
  name: 'SessionsListItem'
}
</script>

<style lang=""></style>
