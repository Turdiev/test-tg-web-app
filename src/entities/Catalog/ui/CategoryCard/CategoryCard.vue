<script setup lang="ts">

import {CardArrow} from '@/shared/ui/card/CardArrow';
import type {ICatalogCategories} from '@/entities/Catalog';

withDefaults(defineProps<{
  category: ICatalogCategories
}>(), {
  category() {
    return null
  },
})

const emit = defineEmits(['click'])

</script>

<template>
  <card-arrow
    :path="category.channelsCount > 0 ? `/catalog/category/${category.name}` : ''"
    :title="category.name"
    :amount-channel="category.channelsCount"
    class="category-card"
    @click="emit('click')"
  />
</template>

<style lang="scss" scoped>
@import "style";
</style>