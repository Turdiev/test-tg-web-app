<script setup lang="ts">

import {IconArrowLeft} from '@/shared/ui/icons';

defineProps<{
  path: string,
  iconLabel?: string
  textAlign: 'center' | 'right' | 'left'
}>()
</script>

<template>
  <div class="title-back">
    <router-link :to="path" class="title-back__button">
      <icon-arrow-left />
      <span v-if="iconLabel">{{ iconLabel }}</span>
    </router-link>
    <div
      class="title-back__title"
      :class="`title-back__title_${textAlign}`"
    >
      <slot />
    </div>

    <div class="title-back__right">
      <slot name="right"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>