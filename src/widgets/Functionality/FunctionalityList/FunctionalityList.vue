<script setup lang="ts">

import {FunctionalityCard} from '@/entities/Functionality/ui';
import type {FunctionalityList} from '@/entities/Functionality';

const functionalityList: FunctionalityList[] = [
  {
    title: 'Поиск',
    description: 'по авторам',
    path: '/',
    type: 'search'
  },
  {
    title: 'Подписки',
    description: 'на каналы',
    path: '/subscriptions',
    type: 'subscriptions'
  },
  {
    title: 'Избранное',
    description: '0 ботов',
    path: '/favorites',
    type: 'favorites'
  },
  {
    title: 'Купленный контент',
    description: '0 покупок',
    path: '/purchase-content',
    type: 'purchased-content'
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