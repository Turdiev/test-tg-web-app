<script setup lang="ts">

import {TitleH3} from '@/shared/ui/title';
import {VCard} from '@/shared/ui/card';
import {IconArrowRight} from '@/shared/ui/icons';
import {useSupportStore} from '@/widgets/Support/model/support';

const supportModel = useSupportStore()
const { articleList } = supportModel
</script>

<template>
  <div class="support-articles">
    <title-h3>Статьи</title-h3>
    <div class="support-articles__list">
      <v-card
        v-for="item in articleList"
        :key="item.id"
        :is-link="true"
        :path="`/support/article/${item.id}`"
        class="support-articles__item"
      >
        <div class="support-articles__wrapper">
          <span>{{ item.title }}</span>
          <icon-arrow-right />
        </div>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>