import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUrls = defineStore('counter', () => {
  const urls = ref(['kYUe3KXoBM0', 'ZiEuU0phwKU', 'dR_AdNY7rtk', 'fZHlgn7GE4I'])

  return { urls }
})
