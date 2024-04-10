<script setup lang="ts">

import type {PurchaseHistory} from '@/entities/PurchaseHistory/model/types';
import {IconCoins, IconUser} from '@/shared/ui/icons';
import {computed} from 'vue';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';

const props = withDefaults(defineProps<{
  item: PurchaseHistory
}>(), {})

const types = {
  SUBSCRIPTION: 'Закрытый канал',
  SINGLE_POST: 'Разовый пост',
  MULTI_POST: 'Набор постов',
  DONATION: 'Донат',
  DEPOSIT: 'Пополнение баланса'
}

const goTo = computed(() => {
  const routeChannel = `/purchase-history/${props.item.channelId}`
  const routeChannelContent = `${routeChannel}?post_id=${props.item.postId}`
  return props.item.type === 'SUBSCRIPTION' ? routeChannel : routeChannelContent
})

const isDepositAndDonation  = computed(() => {
  return ['DONATION', 'DEPOSIT'].includes(props.item.type)
})

const formattedTitle = (type: string, channelTitle: string, postPreview: string) => {
  if (type === 'SUBSCRIPTION') {
    return `<span class="purchase-history-item__user-name">
              ${ channelTitle }
            </span>`
  } else {
    return postPreview
  }
}

const formattedName = (type: string, botSellerName: string, channelTitle: string) => {
  if (type === 'SUBSCRIPTION') {
    return channelTitle
  } else {
    return botSellerName
  }
}

</script>

<template>
  <router-link
    :to="!isDepositAndDonation ? goTo : ''"
    class="purchase-history-item"
  >
    <image-avatar
      :title="!isDepositAndDonation ? formattedName(item.type, item.botSellerName, item.channelTitle) : ''"
      :background="isDepositAndDonation ? 'blue-light' : 'blue' "
    >
      <icon-coins v-if="isDepositAndDonation"/>
    </image-avatar>
    <div class="purchase-history-item__wrapper">
      <div class="purchase-history-item__left">
        <div
          v-if="!isDepositAndDonation"
          class="purchase-history-item__user"
        >
          <div class="purchase-history-item__user-name">
            <span v-html="formattedTitle(item.type, item.channelTitle, item.postPreview)"></span>
          </div>
          <div class="purchase-history-item__user-login">
            <icon-user />
            <span>{{ formattedName(item.type, item.botSellerName, item.channelTitle) }}</span>
          </div>
        </div>
        <div
          v-else
          class="purchase-history-item__operation"
        >
          <span>{{ types[item.type] }}</span>
        </div>
      </div>
      <div class="purchase-history-item__right">
        <span
            class="purchase-history-item__price"
            :class="{'purchase-history-item__price_deposit': item.type === 'DEPOSIT'}"
        >
          {{ item.type === 'DEPOSIT' ? '+' : '-' }}{{ item.amount }} $
        </span>
        <span
          v-if="!isDepositAndDonation"
          class="purchase-history-item__type"
        >
        {{ types[item.type] }}
      </span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>