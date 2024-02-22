<script setup lang="ts">

import {SearchBar} from '@/features/SearchBar';
import {IconArrowRight} from '@/shared/ui/icons';
import {CatalogListing} from '@/widgets/Catalog';
</script>

<template>
  <div class="catalog-page">
    <div class="container">
      <SearchBar class="catalog-page__search"/>
      <router-link to="/catalog/category" class="catalog-page__all-category">
        <span>Полный список категорий</span>
        <icon-arrow-right />
      </router-link>
    </div>
    <CatalogListing />
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>