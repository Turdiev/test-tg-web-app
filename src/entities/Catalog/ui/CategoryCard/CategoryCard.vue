<script setup lang="ts">

import {CardArrow} from '@/shared/ui/card/CardArrow';
import type {ICategoryListing} from '@/entities/Catalog';

withDefaults(defineProps<{
  category: ICategoryListing
}>(), {
  category() {
    return null
  },
})

const emit = defineEmits(['click'])

</script>

<template>
  <card-arrow
    :path="`/catalog/category/${category.name}`"
    :title="category.title"
    :amount-channel="category.channels.length"
    class="category-card"
    @click="emit('click')"
  />
</template>

<style lang="scss" scoped>
@import "style";
</style>