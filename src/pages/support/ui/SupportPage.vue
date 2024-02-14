<script setup lang="ts">

import {SearchBar} from '@/features/SearchBar';
import {SupportArticles, SupportFaq} from '@/widgets/Support';
import {ButtonSticky} from '@/shared/ui/button/ButtonSticky';
</script>

<template>
  <div class="support-page">
    <div class="container">
      <SearchBar class="support-page__search"/>
      <SupportFaq class="support-page__faq"/>
      <SupportArticles class="support-page__article"/>
    </div>
    <button-sticky>
      Написать в поддержку
    </button-sticky>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>