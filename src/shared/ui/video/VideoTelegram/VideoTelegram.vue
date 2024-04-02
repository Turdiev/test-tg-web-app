<script setup lang="ts">

import {useModal} from 'vue-final-modal';
import {vfm} from '@/shared/lib/plugins/vue-final-model';
import {IconPlay} from '@/shared/ui/icons';
import {VideoTelegramModal} from '@/shared/ui/video';
import {computed, onBeforeMount, ref} from 'vue';
import {api} from '@/shared/api';
import {useRoute} from 'vue-router';

const route = useRoute()

const props = withDefaults(defineProps<{
  hash: string,
}>(), {
  hash: '',
})

const mediaData = ref('')
const options = ref<{
  fileHash: string,
  fileParts: number,
  fileSize: number,
  fileName: string,
}>({
  fileHash: '',
  fileParts: 0,
  fileSize: 0,
  fileName: '',
})

const botUsername = computed(() => route.params.username)

onBeforeMount(async () => {
  await fetchMedia()
})

const fetchMedia = async () => {
  try {
    const response = await api.getBotMedia(botUsername.value, props.hash)

    mediaData.value = response.data.result

    if (response.data?.fileParts) {
      options.value.fileParts = response.data.fileParts
      options.value.fileHash = response.data.fileHash
      options.value.fileSize = response.data.fileSize
      options.value.fileName = response.data.type[1].fileName
    }

  } catch (_e) {
    console.log('error tg media loading', _e)
  }
}
const showPlayerModal = () => {
  const { open } = useModal({
    context: vfm,
    component: VideoTelegramModal,
    attrs: {
      src: mediaData.value,
      options: options.value,
    }
  })

  open()
}
</script>

<template>
  <div class="video-telegram">
    <video
      :src="mediaData"
      class="video-telegram__video"
    >
      Ваш браузер не поддерживает видео тег
    </video>
    <div
      class="video-telegram__button"
      @click="showPlayerModal"
    >
      <icon-play class="video-telegram__button-icon"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>