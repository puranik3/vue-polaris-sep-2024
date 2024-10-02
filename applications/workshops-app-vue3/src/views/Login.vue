<template lang="">
  <div>
    <h2>Login</h2>
    <hr class="my-4" />
    <form @submit.prevent="login">
      <div class="mb-3">
        <v-text-field
          type="email"
          label="Email"
          id="email"
          v-model.number="form.email"
          @blur="$v.email.$touch()"
          :error-messages="$v.email.$errors.map((error) => error.$message)"
        ></v-text-field>
      </div>
      <div class="mb-3">
        <v-text-field
          type="password"
          label="password"
          id="password"
          v-model.number="form.password"
          @blur="$v.password.$touch()"
          :error-messages="$v.password.$errors.map((error) => error.$message)"
        ></v-text-field>
      </div>
      <v-btn type="submit" color="primary" :disabled="$v.$invalid">
        Login
      </v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

import useAuthStore from '@/store/useAuthStore'

import { useVuelidate } from '@vuelidate/core'
import { email, helpers, required, minLength } from '@vuelidate/validators'
import Validators from '@/services/validators'

const processing = ref(false)

const form = reactive({
  email: '',
  password: ''
})

const rules = {
  email: {
    email: helpers.withMessage('Email does not seem like one', email),
    required: helpers.withMessage('Email is required', required)
  },
  password: {
    required: helpers.withMessage('Password is required', required),
    minLength: helpers.withMessage(
      'Password should be at least 8 characters long',
      minLength(8)
    ),
    // https://stackoverflow.com/questions/61176720/how-to-validate-password-with-vuelidate
    containsUppercase: helpers.withMessage(
      'Password should have at least 1 uppercase letter',
      Validators.containsUppercase
    ),
    containsLowercase: helpers.withMessage(
      'Password should have at least 1 lowercase letter',
      Validators.containsLowercase
    ),
    containsNumber: helpers.withMessage(
      'Password should have at least 1 digit',
      Validators.containsNumber
    ),
    containsSpecial: helpers.withMessage(
      'Password should have at least 1 special character',
      Validators.containsSpecial
    )
  }
}

const $v = useVuelidate(rules, form)
const router = useRouter()
const store = useAuthStore()

const login = async () => {
  $v.value.$touch()

  if (!$v.value.$invalid) {
    processing.value = true

    try {
      await store.login(form)
      router.push({ name: 'home' })
    } catch (error) {
      alert((error as Error).message)
    } finally {
      processing.value = false
    }
  }
}
</script>

<script lang="ts">
export default {
  name: 'AppLogin'
}
</script>

<style lang=""></style>
