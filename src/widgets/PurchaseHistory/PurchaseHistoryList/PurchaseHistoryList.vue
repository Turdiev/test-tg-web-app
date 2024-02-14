<script setup lang="ts">

import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model/purchase-history';
import {PurchaseHistoryItem} from '@/entities/PurchaseHistory/ui';
import {TitleH3} from '@/shared/ui/title';

const purchaseHistoryStore = usePurchaseHistoryStore()
const { dataHistory } = purchaseHistoryStore
</script>

<template>
  <div class="purchase-history-list">
    <div
      v-for="(data, index) in dataHistory"
      :key="`${data.date}_${index}`"
      class="purchase-history-list__data"
    >
      <div class="purchase-history-list__info">
        <title-h3>{{ data.date }}</title-h3>
        <span class="purchase-history-list__info-total">{{ data.total }}</span>
      </div>
      <PurchaseHistoryItem
        v-for="(history, index) in data.history"
        :key="`${history.username}_${index}`"
        :item="history"
        class="purchase-history-list__item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>