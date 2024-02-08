<script setup lang="ts">

import {CardLink} from '@/shared/ui/card';

defineProps<{
  card: {
    title: string,
    description: string,
    path: string,
    type: string
  }
}>()

</script>

<template>
  <CardLink
    class="functionality-card"
    :class="`functionality-card_${card.type}`"
  >
    <div class="functionality-card__content">
      <div class="functionality-card__title">
        <span>{{ card.title }}</span>
      </div>
      <div class="functionality-card__description">
        <span>{{ card.description }}</span>
      </div>
    </div>
  </CardLink>
</template>

<style lang="scss" scoped>
@import "style";
</style>