<script setup lang="ts">

import {IconArrowRight} from '@/shared/ui/icons';
import {computed} from 'vue';

const props = withDefaults(defineProps<{
  title: string,
  path?: string,
  image?: string,
  amountChannel?: number,
  subscribers?: number,
}>(), {
  path: '',
  amountChannel: 0,
  subscribers: 0
})

defineEmits(['click'])

const definitionWord = computed(() => {
  return props.amountChannel ? `${props.amountChannel} каналов` : `${props.subscribers} подписчиков`
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
            class="card-arrow__title"
            :class="{'card-arrow__title_font-weight': image}"
          >
            {{ title }}
          </span>
          <span class="card-arrow__text">
            {{ definitionWord }}
          </span>
        </div>
      </div>
      <div class="card-arrow__icon">
        <icon-arrow-right />
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>