<script setup lang="ts">

import {computed, onBeforeMount, ref} from 'vue';
import {useRoute} from 'vue-router';
import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {CardAuthor} from '@/shared/ui/card/CardAuthor';
import {VCard} from '@/shared/ui/card';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import type {IHistory} from '@/entities/PurchaseHistory/model/types';
import {IconArrowRight, IconCalendar, IconCoins, IconCreditCard} from '@/shared/ui/icons';

const router = useRoute()
const purchaseHistoryStore = usePurchaseHistoryStore()
const { getHistoryById } = purchaseHistoryStore

const currentHistory = ref<IHistory>();

const historyId = computed(() => router.params.id)
const accessTo = computed(() => {
  return currentHistory.value?.type.value === 'content' ? 'Доступ к контенту' : 'Доступ к закрытому каналу'
})
const isCloseChannel = computed(() => {
  return currentHistory.value?.type.value === 'close-channel'
})

onBeforeMount(() => {
  currentHistory.value = getHistoryById(historyId.value)
})


</script>

<template>
  <div class="purchase-history-details">
    <card-author />
    <v-card
      :is-link="true"
      class="purchase-history-details__post"
    >
      <image-avatar v-if="isCloseChannel"/>
      <div class="purchase-history-details__post-content">
        <span class="purchase-history-details__post-access">
          {{ accessTo }}
        </span>
        <span class="purchase-history-details__post-name">
          {{ currentHistory.name }}
        </span>
      </div>
    </v-card>
    <v-card
      :is-link="true"
      class="purchase-history-details__content"
    >
      <div class="purchase-history-details__content-price">
        <div class="purchase-history-details__content-price-wrap">
          <image-avatar
            background="blue"
            form="square"
            size="small"
          >
            <icon-coins />
          </image-avatar>
          <span class="purchase-history-details__content-price-title">Стоимость</span>
        </div>
        <span class="purchase-history-details__content-price-text">2 100 ₽</span>
      </div>
      <div v-if="isCloseChannel" class="purchase-history-details__content-divider"></div>
      <div
        v-if="isCloseChannel"
        class="purchase-history-details__content-date-expired"
      >
        <span>Доступно до 13 января</span>
        <div class="purchase-history-details__content-button">
          <span>Продлить</span>
          <icon-arrow-right />
        </div>
      </div>
    </v-card>
    <v-card
      :is-link="true"
      class="purchase-history-details__data"
    >
      <div class="purchase-history-details__data-wrapper">
        <image-avatar
            background="blue"
            form="square"
            size="small"
        >
          <icon-calendar />
        </image-avatar>
        <span class="purchase-history-details__data-title">Дата операции</span>
      </div>
      <span class="purchase-history-details__data-text">13 декабря, 11:06</span>
    </v-card>
    <v-card
      :is-link="true"
      class="purchase-history-details__status"
    >
      <div class="purchase-history-details__status-wrapper">
        <image-avatar
          background="blue"
          form="square"
          size="small"
        >
          <icon-credit-card />
        </image-avatar>
        <span class="purchase-history-details__status-title">Статус</span>
      </div>
      <span class="purchase-history-details__status-text">Оплачено</span>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>