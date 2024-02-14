<script setup lang="ts">

import type {IHistory} from '@/entities/PurchaseHistory/model/types';
import {IconCoins, IconUser} from '@/shared/ui/icons';
import {ImageAvatar} from '@/shared/ui/image/ImageAvatar';
import {computed} from 'vue';

const props = defineProps<{
  item: IHistory
}>()

const goTo = computed(() => {
  if (props.item.type.value === 'up-balance') {
    return ''
  }
  return `/purchase-history/${props.item.id}`
})

</script>

<template>
  <router-link
    :to="goTo"
    class="purchase-history-item"
  >
    <image-avatar
      :background="item.type.value === 'up-balance' ? 'blue' : 'default'"
    >
      <icon-coins v-if="item.type.value === 'up-balance'"/>
    </image-avatar>
    <div class="purchase-history-item__wrapper">
      <div class="purchase-history-item__left">
        <div
          v-if="item.type.value !== 'up-balance'"
          class="purchase-history-item__user"
        >
        <span class="purchase-history-item__user-name">
          {{ item.name }}
        </span>
          <div class="purchase-history-item__user-login">
            <icon-user />
            <span>{{ item.username }}</span>
          </div>
        </div>
        <div
          v-else
          class="purchase-history-item__operation"
        >
          <span>{{ item.type.name }}</span>
        </div>
      </div>
      <div class="purchase-history-item__right">
        <span
          class="purchase-history-item__price"
          :class="{'purchase-history-item__price_color': item.type.value === 'up-balance'}"
        >
          {{ item.price }}
        </span>
        <span
          v-if="item.type.value !== 'up-balance'"
          class="purchase-history-item__type"
        >
        {{ item.type.name }}
      </span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "style";
</style>