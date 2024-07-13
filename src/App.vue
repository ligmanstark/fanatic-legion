<script setup lang="ts">
import { RouterView } from "vue-router"
import DefaultLayout from "./layouts/layoutDefault.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <DefaultLayout />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }
}
</style>
