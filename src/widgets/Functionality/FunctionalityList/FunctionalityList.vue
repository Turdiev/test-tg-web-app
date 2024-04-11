<script setup lang="ts">

import {FunctionalityCard} from '@/entities/Functionality/ui';
import type {FunctionalityList} from '@/entities/Functionality';
import {IconBookmark, IconFolder, IconSearch, IconUsers} from '@/shared/ui/icons';
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const functionalityList: FunctionalityList[] = [
  {
    title: t('common.search'),
    description: t('main.byAuthors'),
    path: '/',
    type: 'search',
    icon: IconSearch
  },
  {
    title: t('pages.subscriptions'),
    description: t('main.channels'),
    path: '/subscriptions',
    type: 'subscriptions',
    icon: IconUsers
  },
  {
    title: t('pages.favorite'),
    description: `0 ${t('common.bot.bots')}`,
    path: '/favorites',
    type: 'favorites',
    icon: IconBookmark
  },
  {
    title: t('pages.purchasedContent'),
    description: `0 ${t('common.purchase.purchasesPlural')}`,
    path: '/purchase-content',
    type: 'purchased-content',
    icon: IconFolder
  }
]
</script>

<template>
  <div class="functionality-list">
    <div class="container">
      <div class="functionality-list__wrapper">
        <FunctionalityCard
          v-for="card in functionalityList"
          :key="card.type"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>