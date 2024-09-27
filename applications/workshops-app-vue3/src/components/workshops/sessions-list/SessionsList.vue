<template lang="">
  <div>
    <h2>List of sessions</h2>
    <v-divider></v-divider>

    <v-list v-if="sessions">
      <v-list-item v-for="session of sessions" :key="session.id">
        <sessions-list-item
          :session="session"
          @downvote="_emits('downvote', $event)"
          @upvote="_emits('upvote', $event)"
        ></sessions-list-item>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import type { ISession } from '@/services/sessions'
import SessionsListItem from './sessions-list-item/SessionsListItem.vue'

const _emits = defineEmits<{
  downvote: [event: { id: number }]
  upvote: [event: { id: number }]
}>()

interface Props {
  sessions: ISession[] | undefined
}
const props = defineProps<Props>()
</script>

<script lang="ts">
export default {
  name: 'SessionsList'
}
</script>

<style lang=""></style>
