<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import type {FunctionalityList} from '@/entities/Functionality';

withDefaults(defineProps<{
  card: FunctionalityList
}>(), {
  card() {
    return null
  }
})

</script>

<template>
  <VCard
    :is-link="true"
    :path="card.path"
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
  </VCard>
</template>

<style lang="scss" scoped>
@import "style";
</style>