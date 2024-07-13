<script setup lang="ts">
import { useUrls } from "../stores/urls"
import { storeToRefs } from "pinia"
const store = useUrls()
const { urls } = storeToRefs(store)
const content = urls.value
</script>

<template>
  <div>
    <h2 class="h-wrapper">Видео контент</h2>
    <div class="content-wrapper">
      <div class="video-list-wrapper">
        <vue-plyr v-for="url in content" :class="`id-${url}`" class="video-wrapper">
          <div data-plyr-provider="youtube" :data-plyr-embed-id="`${url}`" data-plyr-></div>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>
<style>
.video-list-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 1rem;
}
.h-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2px;
}
</style>
