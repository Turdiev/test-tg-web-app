<script setup lang="ts">

import {IconArrowRight} from '@/shared/ui/icons';
import {computed} from 'vue';
import {pluralize} from '@/shared/lib/helpers';
import IconBookmark from "@/shared/ui/icons/IconBookmark.vue";

const props = withDefaults(defineProps<{
  title?: string,
  postName?: string,
  path?: string,
  image?: string,
  amountChannel?: number,
  subscribers?: number,
  price?: number,
  channelName?: string
  isBookmark?: boolean,
}>(), {
  path: '',
  amountChannel: 0,
  subscribers: 0,
  isBookmark: false,
})

const emit = defineEmits(['click', 'click:bookmark'])

const definitionWord = computed(() => {
  return props.amountChannel ?
      pluralize(props.amountChannel, 'канал', 'канала', 'каналов') :
      pluralize(props.subscribers, 'подписчик', 'подписчика', 'подписчиков')
})
</script>

<template>
  <router-link
    :to="path"
    class="card-arrow"
    :class="{'card-arrow_border': image}"
    @click="$emit('click')"
  >
    <div class="card-arrow__wrapper">
      <div class="card-arrow__content">
        <div
          v-if="image"
          class="card-arrow__image"
        ></div>
        <div class="card-arrow__info">
          <span
            v-if="title"
            class="card-arrow__title"
            :class="{'card-arrow__title_font-weight': image}"
          >
            {{ title }}
          </span>
          <span
            v-if="postName"
            class="card-arrow__post-name"
            v-html="postName"
          ></span>
          <span
            v-if="amountChannel || subscribers"
            class="card-arrow__text"
          >
            {{ definitionWord }}
          </span>
          <div
            v-else
            class="card-arrow__details"
          >
            <span class="card-arrow__text card-arrow__text_color">{{ price }} ₽</span>
            <span class="card-arrow__text">{{ channelName }}</span>
          </div>
        </div>
      </div>
      <div class="card-arrow__icons">
        <div
          v-if="isBookmark"
          class="card-arrow__icons"
          @click="emit('click:bookmark')"
        >
          <icon-bookmark />
        </div>

        <div class="card-arrow__icon">
          <icon-arrow-right />
        </div>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>