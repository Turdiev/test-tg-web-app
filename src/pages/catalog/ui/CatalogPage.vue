<script setup lang="ts">

import {IconArrowRight} from '@/shared/ui/icons';
import {CatalogListing} from '@/widgets/Catalog';
import {CatalogSearch} from '@/entities/Catalog/ui/CatalogSearch';
import {ref} from 'vue';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const isShowListing = ref(false)

const focused = () => {
  isShowListing.value = true
}
const close = () => {
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
        <span>{{ t('catalog.fullListCategories') }}</span>
        <icon-arrow-right />
      </router-link>
    </div>
    <CatalogListing v-show="!isShowListing"/>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>