<script setup lang="ts">

import {IconArrowRight} from '@/shared/ui/icons';
import {CatalogListing} from '@/widgets/Catalog';
import {CatalogSearch} from '@/entities/Catalog/ui/CatalogSearch';
import {ref} from 'vue';

const isShowListing = ref(false)

const focused = () => {
  console.log('FOCUS')
  isShowListing.value = true
}
const close = () => {
  console.log('CLOSE')
  isShowListing.value = false
}

</script>

<template>
  <div class="catalog-page">
    <div class="container">
      <CatalogSearch
        class="catalog-page__search"
        :class="{'catalog-page__search_indentation': isShowListing}"
        @focus="focused"
        @close="close"
      />

      <router-link
        v-show="!isShowListing"
        to="/catalog/category"
class="catalog-page__all-category"
      >
        <span>Полный список категорий</span>
        <icon-arrow-right />
      </router-link>
    </div>
    <CatalogListing v-show="!isShowListing"/>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>