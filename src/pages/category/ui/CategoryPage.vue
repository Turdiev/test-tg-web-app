<script setup lang="ts">

import {TitleBack, TitleH3} from '@/shared/ui/title';
import {CategoryListing} from '@/widgets/Category';
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <div class="category-page">
    <div class="container">
      <title-back path="/catalog" text-align="center">
        <title-h3>{{ t('pages.listCategories') }}</title-h3>
      </title-back>

      <CategoryListing />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>