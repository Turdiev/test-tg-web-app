<script setup lang="ts">

import {SupportArticles, SupportFaq} from '@/widgets/Support';
import {onBeforeMount} from 'vue';
import {useSupportStore} from '@/entities/Support/model/support';
import {SupportArticleSearch} from '@/entities/Support/ui/SupportArticleSearch';
// import {ButtonSticky} from '@/shared/ui/button/ButtonSticky';

const supportStorage = useSupportStore()
const { fetchSupportsArticles } = supportStorage

onBeforeMount(async () => {
  await fetchSupportsArticles()
})
</script>

<template>
  <div class="support-page">
    <div class="container">
      <SupportArticleSearch class="support-page__search"/>
      <SupportFaq class="support-page__faq"/>
      <SupportArticles class="support-page__article"/>
    </div>
<!--    <button-sticky>-->
<!--      Написать в поддержку-->
<!--    </button-sticky>-->
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>