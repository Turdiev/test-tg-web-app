<script setup lang="ts">

import {CategoryCard, useCatalogStore} from '@/entities/Catalog';
import {storeToRefs} from 'pinia';

const catalogStore = useCatalogStore()
const { categoryListing, transitionFrom } = storeToRefs(catalogStore)

const saveTransitionFrom = () => {
  transitionFrom.value = '/catalog/category'
}
</script>

<template>
  <div
    v-for="category in categoryListing"
    :key="category.id"
    class="category-listing"
  >
    <CategoryCard
      :category="category"
      class="category-listing__card"
      @click="saveTransitionFrom"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>