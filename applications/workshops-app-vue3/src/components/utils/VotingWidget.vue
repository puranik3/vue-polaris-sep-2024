<template lang="">
  <div>
    <!-- @todo -->
    <!-- <b-dislike @click="_emits('downvote')"></b-dislike> -->
    <v-btn @click="_emits('downvote')">Dislike</v-btn>
    {{ votes }}
    <!-- <b-like @click="_emits('upvote')"></b-like> -->
    <v-btn @click="_emits('upvote')">Like</v-btn>
  </div>
</template>

<script setup lang="ts">
import type { VoteType } from '@/services/sessions'

const _emits = defineEmits(['downvote', 'upvote'])

const props = defineProps({
  votes: {
    type: Number,
    default: 0,
    required: true
  }
})
// or

// withDefaults(defineProps<{ votes: number }>(), {
//   votes: 0
// })
</script>

<script lang="ts">
export default {
  name: 'AppVotingWidget'
}
</script>

<style lang="scss" scoped>
.b-icon {
  cursor: pointer;
}
</style>
