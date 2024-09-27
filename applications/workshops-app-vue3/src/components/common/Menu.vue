<template>
  <v-layout>
    <!-- mobile version -->
    <v-navigation-drawer v-model="drawer" color="primary" disable-resize-watcher>
      <v-list nav>
        <!-- When you use the link prop, the element automatically becomes a router-link - <router-link></router-link> -->
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          v-bind="item"
          :title="item.text"
          exact
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="px-md-4">
      <template #prepend>
        <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />
      </template>

      <!--
            <v-img
                class="me-sm-8"
                max-width="40"
                src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
            />
            -->

      <!-- desktop version -->
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          v-for="item in items"
          :key="item.text"
          class="me-2 text-none"
          slim
          v-bind="item"
          link
          exact
        />
      </template>

      <v-spacer />

      <template #append>
        <v-btn class="ms-1" color="medium-emphasis" icon="mdi-bell-outline" />

        <v-btn class="ms-1" icon>
          <v-avatar image="https://cdn.vuetifyjs.com/images/john.png" />

          <v-menu activator="parent" origin="top">
            <v-list>
              <v-list-item link title="Update profile" />

              <v-list-item link title="Sign out" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main height="80">
      <!--  -->
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const items = [
  {
    text: 'Home',
    to: {
      name: 'home'
    }
  },
  {
    text: 'List of workshops',
    to: {
      name: 'workshops-list'
    }
  },
  {
    text: 'Add a workshop',
    to: {
      name: 'add-workshop'
    }
  }
]
</script>

<script lang="ts">
export default {
  name: 'AppMenu'
}
</script>

<style lang="scss" scoped></style>
