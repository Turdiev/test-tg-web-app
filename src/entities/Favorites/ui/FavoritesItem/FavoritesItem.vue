<script setup lang="ts">

import {CardArrow} from '@/shared/ui/card/CardArrow';
import type {IFavoritesChannel} from '@/entities/Favorites/model';

withDefaults(defineProps<{
  channel: IFavoritesChannel
}>(), {
  channel() {
    return null
  },
})

const emit = defineEmits(['click', 'click:bookmark'])
</script>

<template>
  <card-arrow
    path="#"
    image="image"
    :title="channel.username"
    :amount-channel="channel.channelCount"
    :is-bookmark="channel.isFavorite"
    class="favorites-item"
    @click="emit('click')"
    @click:bookmark="emit('click:bookmark', $event)"
  >
    <template #bookmark>
      <slot name="bookmark"/>
    </template>
  </card-arrow>
</template>

<style lang="scss" scoped>
@import "style";
</style>