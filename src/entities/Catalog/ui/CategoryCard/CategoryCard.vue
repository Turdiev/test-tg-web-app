<script setup lang="ts">

import {CardArrow} from '@/shared/ui/card/CardArrow';
import type {ICategoryListing} from '@/entities/Catalog';

defineProps<{
  category: ICategoryListing
}>()


</script>

<template>
  <card-arrow
    :path="`/catalog/category/${category.name}`"
    :title="category.title"
    :amount-channel="category.channels.length"
    class="category-card"
    @click="$emit('click')"
  />
</template>

<style lang="scss" scoped>
@import "style";
</style>