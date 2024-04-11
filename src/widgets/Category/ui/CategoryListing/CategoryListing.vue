<script setup lang="ts">

import {CategoryCard, useCatalogStore} from '@/entities/Catalog';
import {storeToRefs} from 'pinia';
import {VLoader} from '@/shared/ui/loaders';
import {useLoadingWrap} from '@/shared/lib/use';
import {onBeforeMount} from 'vue';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const catalogStore = useCatalogStore()
const { fetchCatalogCategories } = catalogStore
const { categoriesListing, transitionFrom } = storeToRefs(catalogStore)

const { isLoading, runWithLoading } = useLoadingWrap()

onBeforeMount(() => {
  runWithLoading(fetchCatalogCategories)
})

const saveTransitionFrom = () => {
  transitionFrom.value = '/catalog/category'
}
</script>

<template>
  <v-loader v-model="isLoading" />

  <template v-if="!isLoading && categoriesListing.length !== 0">
    <div
      v-for="category in categoriesListing"
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
  <div
    v-if="!isLoading && categoriesListing.length === 0"
    class="category-listing__not-results"
  >
    <span>{{ t('catalog.noCategories') }}</span>
  </div>

</template>

<style lang="scss" scoped>
@import "style";
</style>