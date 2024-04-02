<script setup lang="ts">

import type {PurchaseHistory} from '@/entities/PurchaseHistory/model/types';
import {IconUser} from '@/shared/ui/icons';
import {computed} from 'vue';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';

const props = withDefaults(defineProps<{
  item: PurchaseHistory
}>(), {})

const types = {
  SUBSCRIPTION: 'Закрытый канал',
  SINGLE_POST: 'Контент'
}

const goTo = computed(() => {
  const routeChannel = `/purchase-history/${props.item.channelId}`
  const routeChannelContent = `${routeChannel}?post_id=${props.item.postId}`
  return props.item.type === 'SUBSCRIPTION' ? routeChannel : routeChannelContent
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
    return botSellerName
  } else {
    return channelTitle
  }
}

</script>

<template>
  <router-link
    :to="goTo"
    class="purchase-history-item"
  >
    <image-avatar
      :title="item.channelTitle"
      background="default"
    />
    <div class="purchase-history-item__wrapper">
      <div class="purchase-history-item__left">
        <div class="purchase-history-item__user">
          <div class="purchase-history-item__user-name" v-html="formattedTitle(item.type, item.channelTitle, item.postPreview)"></div>
          <div class="purchase-history-item__user-login">
            <icon-user />
            <span>{{ formattedName(item.type, item.botSellerName, item.channelTitle) }}</span>
          </div>
        </div>
      </div>
      <div class="purchase-history-item__right">
        <span class="purchase-history-item__price">
          {{ item.amount }} ₽
        </span>
        <span class="purchase-history-item__type">
        {{ types[item.type] }}
      </span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>