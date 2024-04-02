<script setup lang="ts">

import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {TitleBack, TitleH2} from '@/shared/ui/title';
import {useSupportStore} from '@/entities/Support/model/support';

const route = useRoute()
const supportStorage = useSupportStore()
const { supportArticleListing } = supportStorage

const articleId = computed(() => route.params.id)

const currentArticle = computed(() => supportArticleListing.find(item => item.id === articleId.value))

</script>

<template>
  <div class="support-article-page">
    <div class="container">
      <title-back
        path="/support"
        text-align="left"
        icon-label="Назад"
      />
      <title-h2>
        {{ currentArticle?.title }}
      </title-h2>
      <div class="support-article-page__content" v-html="currentArticle.text">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>