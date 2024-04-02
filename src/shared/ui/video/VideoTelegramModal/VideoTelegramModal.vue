<script setup lang="ts">

import {VueFinalModal} from 'vue-final-modal';
import IconClose from '@/shared/ui/icons/IconClose.vue';
import {computed, onMounted, ref} from 'vue';
import {useCachedMediaStore} from '@/shared/lib/use';
import {api} from '@/shared/api';
import buffer from 'buffer';
import {useRoute} from 'vue-router';
import {storeToRefs} from 'pinia';

const route = useRoute()
const cachedMediaStorage = useCachedMediaStore()
const { cachedMedia } = storeToRefs(cachedMediaStorage)
const { setCachedMedia } = cachedMediaStorage

const props = withDefaults(defineProps<{
  src?: string,
  options: {
    fileHash: string | undefined,
    fileParts: number | undefined,
    fileSize: number | undefined,
    fileName: string | undefined,
  }
}>(), {})

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const videoPlayer = ref<HTMLElement | null>(null)
const srcVideo = ref<string>('')
const combinedPartVideo = ref<string>('')
const controlsList = 'nodownload noremoteplayback noplaybackrate'

let currentTime: number | null = null

const botUsername = computed(() => route.params.username)
const currentVideoCache = computed(() => {
  return cachedMedia.value.find(video => video.fileName === props.options.fileName)
})

onMounted(() => {
  if (currentVideoCache.value) {
    srcVideo.value = currentVideoCache.value.src
  } else {
    loadPartVideo()
  }
})

const loadPartVideo  = async () => {
  let startPart = 0

  if (props.options.fileParts) {
    while (startPart < props.options.fileParts) {
      await fetchPartVideo(startPart)
      startPart++
    }

    setCachedMedia({
      fileName: props.options.fileName,
      src: `data:video/mp4;base64,${combinedPartVideo.value}`
    })
  } else {
    srcVideo.value = props.src
  }
}

const fetchPartVideo = async (part: number) => {
  try {
    const response = await api.getBotMediaVideoPart(botUsername.value, props.options.fileHash, part)

    mergePartsVideo(combinedPartVideo.value, response.data)

  } catch (_e) {
    console.log('error tg media loading', _e)
  }
}

const mergePartsVideo = (base64Part1: string, base64Part2: string) =>  {
  if (!base64Part2) return false

  const Buffer = buffer.Buffer
  const bufferPart1 = Buffer.from(base64Part1, 'base64');
  const bufferPart2 = Buffer.from(base64Part2, 'base64');
  const combinedBuffer = Buffer.concat([bufferPart1, bufferPart2]);
  combinedPartVideo.value = combinedBuffer.toString('base64')

  setContentInVideo()
}

const setContentInVideo = () => {
  if (videoPlayer.value && videoPlayer.value.src) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.src = `data:video/mp4;base64,${combinedPartVideo.value}`
      videoPlayer.value.currentTime = currentTime;
      videoPlayer.value.play()
    }

    currentTime = videoPlayer.value.currentTime
  } else {
    videoPlayer.value.src = `data:video/mp4;base64,${combinedPartVideo.value}`
  }
}

</script>

<template>
  <vue-final-modal
    class="video-telegram-modal"
    content-class="video-telegram-modal__content"
    teleport-to="body"
    @update:model-value="val => emit('update:modelValue', val)"
  >
    <div class="video-telegram-modal__body">
      <video
        ref="videoPlayer"
        controls
        autoplay
        :controlslist="controlsList"
        type="video/mp4"
        class="video-telegram-modal__player"
      >
        <source :src="srcVideo" type="video/mp4">
      </video>
    </div>
    <div
      class="video-telegram-modal__close"
      @click="emit('update:modelValue', false)"
    >
      <span>Закрыть</span>
    </div>
  </vue-final-modal>
</template>

<style lang="scss" >
@import "style";
</style>