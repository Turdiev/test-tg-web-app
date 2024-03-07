<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import type {IChannel} from '@/entities/Catalog';

defineProps<{
  channel: IChannel
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <v-card
    :is-link="false"
    class="channel-card"
    @click="emit('click')"
  >
    <div class="channel-card__wrapper">
      <div class="channel-card__image">
      </div>
      <div class="channel-card__info">
        <p class="channel-card__title">{{ channel.title }}</p>
        <p class="channel-card__amount_subscribers"> {{ channel.amount_subscribers }} подписчиков</p>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import "style";
</style>