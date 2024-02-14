<script setup lang="ts">

import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {TitleH2} from '@/shared/ui/title';
import {useSupportStore} from '@/widgets/Support/model/support';

const route = useRoute()
const supportModel = useSupportStore()
const { articleList } = supportModel

const articleId = computed(() => route.params.id)

const currentArticle = computed(() => articleList.find(item => item.id === articleId.value))

</script>

<template>
  <div class="support-article-page">
    <div class="container">
      <title-h2>
        {{ currentArticle?.title }}
      </title-h2>
      <div class="support-article-page__content">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>