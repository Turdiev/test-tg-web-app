<script setup lang="ts">

import {CardArrow} from '@/shared/ui/card/CardArrow';
import type {IChannelSubscriptions} from '@/entities/Subscriptions/model';

withDefaults(defineProps<{
  channel: IChannelSubscriptions
}>(), {
  channel() {
    return null
  },
})
</script>

<template>
  <card-arrow
    path="#"
    image="image"
    :title="channel.title"
    :subscribers="channel.subscribersCount"
    class="subscriptions-item"
    @click="$emit('click')"
  />
</template>

<style lang="scss" scoped>
@import "style";
</style>