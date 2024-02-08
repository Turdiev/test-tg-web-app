import { defineStore } from 'pinia'
import {ref} from 'vue';

const namespace = 'app'

export const useAppStore = defineStore(namespace, () => {
  const app = ref()

  return {
    app
  }
})