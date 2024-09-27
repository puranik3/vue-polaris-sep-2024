<template lang="">
  <div>
    <h2>Request a new session</h2>
    <hr />
    <form @submit.prevent="requestToAddSession">
      <div class="mb-3">
        <v-text-field
          type="number"
          label="Sequence ID"
          id="sequenceId"
          v-model.number="form.sequenceId"
          @blur="$v.sequenceId.$touch()"
          :error-messages="$v.sequenceId.$errors.map((error) => error.$message)"
        ></v-text-field>
        <!--
        <small v-if="$v.form.sequenceId.$error" class="text-danger">
          <div v-if="!$v.form.sequenceId.required">This field is required</div>
          <div v-if="!$v.form.sequenceId.minValue">Minimum value is 1</div>
        </small>
        -->
      </div>

      <div class="mb-3">
        <v-text-field
          type="text"
          label="Name"
          id="name"
          v-model.number="form.name"
          @blur="$v.name.$touch()"
          :error-messages="$v.name.$errors.map((error) => error.$message)"
        ></v-text-field>
        {{ $v.name.errors }}
        <!-- <small v-if="$v.form.name.$error" class="text-danger">
          <div v-if="!$v.form.name.required">This field is required</div>
          <div v-if="!$v.form.name.nameValue">
            Name can have only letters and spaces
          </div>
        </small> -->
      </div>

      <div class="mb-3">
        <v-text-field
          type="text"
          label="Speaker"
          id="speaker"
          v-model.number="form.speaker"
          @blur="$v.speaker.$touch()"
          :error-messages="$v.speaker.$errors.map((error) => error.$message)"
        ></v-text-field>
      </div>

      <div class="mb-3">
        <v-text-field
          type="number"
          label="Duration"
          id="duration"
          v-model.number="form.duration"
          @blur="$v.duration.$touch()"
          :error-messages="$v.duration.$errors.map((error) => error.$message)"
        ></v-text-field>
      </div>

      <div class="mb-3">
        <v-select
          :items="levels"
          label="Level"
          id="level"
          v-model.number="form.level"
          @blur="$v.level.$touch()"
          :error-messages="$v.level.$errors.map((error) => error.$message)"
        ></v-select>
      </div>

      <div class="mb-3">
        <v-textarea
          rows="3"
          :counter="200"
          id="abstract"
          label="Abstract"
          v-model="form.abstract"
          @blur="$v.abstract.$touch()"
          :error-messages="$v.abstract.$errors.map((error) => error.$message)"
        ></v-textarea>
      </div>

      <v-btn type="submit" color="primary" :disabled="$v.$invalid">
        Request new session
      </v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import {
  decimal,
  helpers,
  minLength,
  minValue,
  required
} from '@vuelidate/validators'
import Validators from '@/services/validators'

import { requestNewSession } from '@/services/sessions'
import type { ISession, Level } from '@/services/sessions'

const _emits = defineEmits<{
  sessionAdd: [event: { session: ISession }]
}>()

const form = reactive({
  sequenceId: 0,
  name: '',
  speaker: '',
  duration: 0,
  level: 'Basic' as Level,
  abstract: ''
})

const levels = ['Basic', 'Intermediate', 'Advanced']

const rules = {
  sequenceId: {
    required: helpers.withMessage('Sequence ID is required', required),
    minValue: helpers.withMessage('Minimum value is 1', minValue(1))
  },
  name: {
    required: helpers.withMessage('Name is required', required),
    // alphaNum,

    nameValue: helpers.withMessage(
      'Name should have only letters or spaces',
      Validators.nameValue
    )
  },
  speaker: {
    required: helpers.withMessage('Speaker is required', required),
    nameValue: helpers.withMessage(
      'Speaker name should have only letters or spaces',
      Validators.nameValue
    )
  },
  duration: {
    required: helpers.withMessage('Duration is required', required),
    decimal: helpers.withMessage(
      'Duration can only be a decimal value',
      decimal
    ),
    minValue: helpers.withMessage(
      'Duration should be a positive value',
      minValue(0)
    )
  },
  level: {
    required: helpers.withMessage('Level is required', required)
  },
  abstract: {
    required: helpers.withMessage('Abstract is required', required),
    minLength: helpers.withMessage(
      'At least 20 characters required',
      minLength(20)
    )
  }
}

const $v = useVuelidate(rules, form)

const router = useRouter()
const route = useRoute()

async function requestToAddSession() {
  if ($v.value.$invalid) {
    $v.value.$touch() // trigger validation on entire form
    return // don't proceed
  }

  // all good!
  const session = {
    ...form,
    workshopId: +route.params.id,
    upvoteCount: 0
  }

  console.log(session)

  try {
    // ideally we could move this backend call to the parent, i.e. in WorkshopDetails
    const updatedSession = await requestNewSession(session)

    // inform the parent
    _emits('sessionAdd', {
      session: updatedSession
    })

    // redirect user
    router.push({
      name: 'sessions-list'
    })

    // show a toast message
  } catch (error) {
    // show a toast and clear out the fields
    // ...

    alert((error as Error).message)
  }
}
</script>
<script lang="ts">
export default {
  name: 'RequestSession'
}
</script>

<style lang=""></style>
