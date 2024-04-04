<script setup lang="ts">

import {VCard} from '@/shared/ui/card';
import type {FunctionalityList} from '@/entities/Functionality';
import {useTelegram} from "@/shared/lib/use";

const { themeTelegram } = useTelegram()

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
    :class="`functionality-card_${card.type} functionality-card_gradient-${themeTelegram}`"
  >
    <div class="functionality-card__component">
      <component
        :is="card.icon"
        class="functionality-card__component-icon"
      />
    </div>

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

<style lang="scss" >
@import "style";
</style>