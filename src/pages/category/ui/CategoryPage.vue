<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {CategoryListing} from '@/widgets/Category';
</script>

<template>
  <div class="category-page">
    <div class="container">
      <title-back path="/catalog" text-align="center">
        <title-h3>Список категорий</title-h3>
      </title-back>

      <CategoryListing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>