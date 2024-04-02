<script setup lang="ts">

import {api} from '@/shared/api';
import {computed, onBeforeMount, ref} from 'vue';
import {useRoute} from 'vue-router';
import {useCachedMediaStore} from '@/shared/lib/use';
import {storeToRefs} from 'pinia';

const route = useRoute()
const cachedMediaStorage = useCachedMediaStore()
const { cachedMedia } = storeToRefs(cachedMediaStorage)
const { setCachedMedia } = cachedMediaStorage

const props = withDefaults(defineProps<{
  hash: string,
  preview: string,
  alt:string
}>(), {
  hash: '',
  alt: ''
})

const mediaDataImage = ref('')

const botUsername = computed(() => route.params.username)
const currentVideoCache = computed(() => {
  return cachedMedia.value.find(video => video.fileName === props.alt)
})

onBeforeMount(async () => {
  console.log('chash', currentVideoCache.value)
  if (currentVideoCache.value) {
    mediaDataImage.value = currentVideoCache.value.src
  } else {
    await fetchMedia()
  }
})
const fetchMedia = async () => {
  try {
    const response = await api.getBotMedia(botUsername.value, props.hash)

    mediaDataImage.value = response.data.result
    setCachedMedia({
      fileName: props.alt,
      src: response.data.result
    })
  } catch (_e) {
    console.log('error tg media loading', _e)
  }
}
</script>

<template>
  <img :src="mediaDataImage || preview" :alt="alt">
</template>

<style lang="scss" scoped>
@import "style";
</style>