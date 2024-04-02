<script setup lang="ts">

import {VSwiper} from '@/shared/ui/swiper';
import {ButtonBase} from '@/shared/ui/button/ButtonBase';
import {computed} from 'vue';
import type {InfluenceBotPost} from '@/entities/Bot';
import {BotPostMedia, BotPostProfile} from '@/entities/Bot';
import {CurrencyType} from '@/shared/types';

const props = withDefaults(defineProps<{
  post: InfluenceBotPost,
  channelName: string,
  authorUsername: string
}>(), {
  post() {
    return null
  },
  channel: ''
})

const emit = defineEmits(['click'])

const priceFormatted = computed(() => {
  return `${props.post.price} ${CurrencyType[props.post.currencyType]}`
})

const mediaPost = computed(() => {
  if (props.post.fullMedia && props.post.fullMedia.length > 0) {
    return props.post.fullMedia
  }
  if (props.post.previewMedia && props.post.previewMedia.length > 0) {
    return props.post.previewMedia
  }
})




</script>
<template>
	<div class="bot-content-post-item">
    <BotPostProfile
      :username="authorUsername"
      :channel-name="channelName"
    />

    <div class="bot-content-post-item__media">
      <v-swiper
        v-if="mediaPost"
        :slides-per-view="1"
        :space-between="0"
        :centered-slides="false"
        :pagination="{
          type: 'fraction'
        }"
        class="bot-content-post-item__carousel"
      >
        <template #swiper-slide>
          <swiper-slide
            v-for="media in mediaPost"
            :key="media"
            class="bot-content-post-item__item"
          >
            <BotPostMedia :media="media"/>
          </swiper-slide>
        </template>
      </v-swiper>

      <div
        v-if="post.fullMedia?.length === 0 && post.fullText !== ''"
        class="bot-content-post-item__full-text"
      >
        <span v-html="post.fullText"></span>
      </div>

      <div class="bot-content-post-item__button">
        <button-base
          color="default"
          class="bot-content-post-item__button-base"
          @click="emit('click')"
        >
          <div class="bot-content-post-item__button-base-content">
            <span>Купить</span>

            <div class="bot-content-post-item__button-base-price">
              <span>{{ priceFormatted }}</span>
            </div>
          </div>
        </button-base>
      </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
@import "style";
</style>