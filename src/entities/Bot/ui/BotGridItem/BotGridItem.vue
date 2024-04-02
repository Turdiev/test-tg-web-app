<script setup lang="ts">
import type {InfluenceBotPost} from '@/entities/Bot';
import {IconAlignCenter, IconPlay} from '@/shared/ui/icons';
import {computed} from 'vue';
import {CurrencyType} from '@/shared/types';
import {useRoute} from 'vue-router';
import {ImageTelegram} from '@/shared/ui/image/ImageTelegram';

const props = withDefaults(defineProps<{
  post: InfluenceBotPost
}>(), {
  post() {
    return null
  }
})

const route = useRoute()

const botUsername = computed(() => route.params.username)
const priceFormatted = computed(() => {
  return `${props.post.price} ${CurrencyType[props.post.currencyType]}`
})
const mediaPost = computed(() => {
  if (props.post.fullMedia && props.post.fullMedia.length > 0) {
    return props.post.fullMedia[0]
  }
  if (props.post.previewMedia && props.post.previewMedia.length > 0) {
    return props.post.previewMedia[0]
  }
})
</script>

<template>
	<router-link
    :to="`/bot/${botUsername}/post/${post.id}`"
    class="bot-grid-item"
  >
<!--    <img-->
<!--      v-if="mediaPost && mediaPost.type === 'IMAGE'"-->
<!--      :src="mediaPost.telegramObject?.stripped"-->
<!--      :alt="mediaPost.name"-->
<!--    />-->
    <image-telegram
      v-if="mediaPost && mediaPost.type === 'IMAGE'"
      :hash="mediaPost.telegramObject?.hash"
      :preview="mediaPost.telegramObject?.stripped"
      :alt="mediaPost.name"
    />
    <div
      v-else-if="mediaPost && mediaPost.type === 'VIDEO'"
      class="bot-grid-item__empty"
    >
      <icon-play class="bot-grid-item__empty-icon" />
    </div>
    <div
      v-else
      class="bot-grid-item__empty"
    >
      <icon-align-center class="bot-grid-item__empty-icon" />
    </div>

    <div class="bot-grid-item__price">
      <span>{{ priceFormatted }}</span>
    </div>
	</router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>