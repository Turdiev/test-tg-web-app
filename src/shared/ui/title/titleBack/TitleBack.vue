<script setup lang="ts">

import {IconArrowLeft} from '@/shared/ui/icons';

defineProps<{
  path: string,
  textAlign: 'center' | 'right'
}>()
</script>

<template>
  <div class="title-back">
    <router-link :to="path" class="title-back__button">
      <icon-arrow-left />
    </router-link>
    <div
      class="title-back__title"
      :class="`title-back__title_${textAlign}`"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>