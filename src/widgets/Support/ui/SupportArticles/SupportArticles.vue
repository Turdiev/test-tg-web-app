<script setup lang="ts">

import {TitleH3} from '@/shared/ui/title';
import {SupportArticlesItem} from '@/entities/Support/ui/SupportArticleItem';
import {useSupportStore} from '@/entities/Support/model/support';
import {storeToRefs} from 'pinia';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const supportModel = useSupportStore()
const { supportArticleListing } = storeToRefs(supportModel)

</script>

<template>
  <div class="support-articles">
    <title-h3>{{ t('support.articles') }}</title-h3>
    <div class="support-articles__list">
      <SupportArticlesItem
        v-for="item in supportArticleListing"
        :key="item.id"
        :title="item.title"
        :path="`/support/article/${item.id}`"
        class="support-articles__item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>