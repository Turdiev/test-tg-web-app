<script setup lang="ts">

import {storeToRefs} from 'pinia';
import {computed} from 'vue';
import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {CardAuthor} from '@/shared/ui/card/CardAuthor';
import {VCard} from '@/shared/ui/card';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {IconArrowRight, IconCalendar, IconCoins, IconCreditCard} from '@/shared/ui/icons';
import {currencyToFormat, formatDateTime} from '@/shared/lib/helpers';
import {useTelegram} from '@/shared/lib/use';
import {useI18n} from "vue-i18n";
import {CurrencyType} from "@/shared/types";


const { t } = useI18n()
const { webApp } = useTelegram()

const purchaseHistoryStore = usePurchaseHistoryStore()
const { currentPurchaseHistoryDetails } = storeToRefs(purchaseHistoryStore)
const { fetchPurchaseHistoryPaymentLink } = purchaseHistoryStore

const accessTo = computed(() => {
  return currentPurchaseHistoryDetails.value?.type === 'private' ? t('purchaseHistory.accessPrivateToContent') : t('purchaseHistory.accessToContent')
})
const isCloseChannel = computed(() => {
  return currentPurchaseHistoryDetails.value?.type === 'private'
})

const handleRenewSubscription = async (channelId: string) => {
  const paymentLink = await fetchPurchaseHistoryPaymentLink(channelId)

  if (paymentLink.text) {
    webApp.showPopup({ title: t('main.topUpBalance'), message: paymentLink.text })
  } else {
    webApp.openLink(paymentLink.url)
  }
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
            background="blue-light"
            form="square"
            size="extra-small"
          >
            <icon-coins />
          </image-avatar>
          <span class="purchase-history-details__content-price-title">{{ t('purchaseHistory.price') }}</span>
        </div>
        <span class="purchase-history-details__content-price-text">
          {{ currentPurchaseHistoryDetails?.amount ? currencyToFormat(currentPurchaseHistoryDetails?.amount) : currencyToFormat(currentPurchaseHistoryDetails?.cost)}}
        </span>
      </div>
      <div v-if="isCloseChannel" class="purchase-history-details__content-divider"></div>
      <div
        v-if="isCloseChannel"
        class="purchase-history-details__content-date-expired"
      >
        <span>{{ t('purchaseHistory.availableUntil') }} {{ formatDateTime(currentPurchaseHistoryDetails.subscriptionDateEnd).split(t('common.at'))[0] }}</span>
        <div
          class="purchase-history-details__content-button"
          @click="handleRenewSubscription(currentPurchaseHistoryDetails.id)"
        >
          <span>{{ t('purchaseHistory.extend') }}</span>
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
          background="blue-light"
          form="square"
          size="extra-small"
        >
          <icon-calendar />
        </image-avatar>
        <span class="purchase-history-details__data-title">{{ t('purchaseHistory.dateOfOperation') }}</span>
      </div>
      <span class="purchase-history-details__data-text">{{ formatDateTime(currentPurchaseHistoryDetails?.createdAt) }}</span>
    </v-card>
    <v-card
      :is-link="false"
      class="purchase-history-details__status"
    >
      <div class="purchase-history-details__status-wrapper">
        <image-avatar
          background="blue-light"
          form="square"
          size="extra-small"
        >
          <icon-credit-card />
        </image-avatar>
        <span class="purchase-history-details__status-title">{{ t('purchaseHistory.status') }}</span>
      </div>
      <span
        class="purchase-history-details__status-text"
        :class="[
            { 'purchase-history-details__status-text_success': currentPurchaseHistoryDetails?.amount || currentPurchaseHistoryDetails?.cost },
            { 'purchase-history-details__status-text_error': currentPurchaseHistoryDetails?.amount || currentPurchaseHistoryDetails?.cost }
        ]"
      >
        {{ currentPurchaseHistoryDetails?.amount || currentPurchaseHistoryDetails?.cost ? t('purchaseHistory.paid') : t('purchaseHistory.notPaid')  }}
      </span>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>