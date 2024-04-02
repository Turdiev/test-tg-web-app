<script setup lang="ts">

import {ImageTelegram} from '@/shared/ui/image/ImageTelegram';
import {VideoTelegram} from '@/shared/ui/video';

withDefaults(defineProps<{
  media: any,
}>(), {
  media() {
    return null
  }
})
</script>

<template>
	<div class="bot-post-media">
    <image-telegram
      v-if="media.type === 'IMAGE'"
      :hash="media.telegramObject?.hash"
      :preview="media.telegramObject?.stripped"
      :alt="media.name"
    />
    <video-telegram
      v-if="media.type === 'VIDEO'"
      :hash="media.telegramObject?.hash"
    />
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>