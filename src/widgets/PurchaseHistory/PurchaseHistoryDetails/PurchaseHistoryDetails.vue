<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {computed} from 'vue';
import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {CardAuthor} from '@/shared/ui/card/CardAuthor';
import {VCard} from '@/shared/ui/card';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {IconArrowRight, IconCalendar, IconCoins, IconCreditCard} from '@/shared/ui/icons';
import {formatDateTime} from '@/shared/lib/helpers';
import {useTelegram} from '@/shared/lib/use';


const { webApp } = useTelegram()

const purchaseHistoryStore = usePurchaseHistoryStore()
const { currentPurchaseHistoryDetails } = storeToRefs(purchaseHistoryStore)

const accessTo = computed(() => {
  return currentPurchaseHistoryDetails.value?.type === 'SINGLE_POST' ? 'Доступ к контенту' : 'Доступ к закрытому каналу'
})
const isCloseChannel = computed(() => {
  return currentPurchaseHistoryDetails.value?.type === 'private'
})

const subscriberChannel = computed(() => {
  return currentPurchaseHistoryDetails.value?.subscribers[0]
})

const handleRenewSubscription = (paymentLink: string) => {
  window.open(paymentLink, '_blank');
}

const openTelegramLink = (link: string) => {
  webApp.openTelegramLink(link)
}

</script>

<template>
  <div class="purchase-history-details">
    <card-author
      :user-name="currentPurchaseHistoryDetails?.botSellerName || currentPurchaseHistoryDetails?.title"
      @click="openTelegramLink(currentPurchaseHistoryDetails?.botSellerLink || currentPurchaseHistoryDetails?.link)"
    />
    <v-card
      :is-link="false"
      class="purchase-history-details__post"
    >
<!--      <image-avatar v-if="isCloseChannel"/>-->
      <div class="purchase-history-details__post-content">
        <span class="purchase-history-details__post-access">
          {{ accessTo }}
        </span>
        <div
          v-if="currentPurchaseHistoryDetails?.postPreview"
          class="purchase-history-details__post-name"
          v-html="currentPurchaseHistoryDetails?.postPreview"
        ></div>
        <span
          v-else
          class="purchase-history-details__post-name"
        >
          {{ currentPurchaseHistoryDetails?.title }}
        </span>
      </div>
    </v-card>
    <v-card
      :is-link="false"
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
        <span class="purchase-history-details__content-price-text">
          {{ currentPurchaseHistoryDetails?.amount ? `${currentPurchaseHistoryDetails?.amount} ₽` :
            `${currentPurchaseHistoryDetails?.cost} ${currentPurchaseHistoryDetails?.costType}` }}
        </span>
      </div>
      <div v-if="isCloseChannel" class="purchase-history-details__content-divider"></div>
      <div
        v-if="isCloseChannel"
        class="purchase-history-details__content-date-expired"
      >
        <span>Доступно до {{ formatDateTime(subscriberChannel?.dateEnd).split('в')[0] }}</span>
        <div
          class="purchase-history-details__content-button"
          @click="handleRenewSubscription(currentPurchaseHistoryDetails.paymentLink)"
        >
          <span>Продлить</span>
          <icon-arrow-right />
        </div>
      </div>
    </v-card>
    <v-card
      :is-link="false"
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
      <span class="purchase-history-details__data-text">{{ formatDateTime(currentPurchaseHistoryDetails?.createdAt) }}</span>
    </v-card>
    <v-card
      :is-link="false"
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
      <span class="purchase-history-details__status-text">
        {{ currentPurchaseHistoryDetails?.amount || currentPurchaseHistoryDetails?.cost ? 'Оплачено' : 'Не опалчено'  }}
      </span>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>