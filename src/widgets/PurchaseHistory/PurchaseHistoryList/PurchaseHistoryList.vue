<script setup lang="ts">

import {usePurchaseHistoryStore} from '@/entities/PurchaseHistory/model';
import {PurchaseHistoryItem} from '@/entities/PurchaseHistory/ui';
import {TitleH3} from '@/shared/ui/title';
import {computed, onBeforeMount} from 'vue';
import {storeToRefs} from 'pinia';
import {definitionsDate} from '@/shared/lib/helpers';
import {VLoader} from '@/shared/ui/loaders';
import {useLoadingWrap} from '@/shared/lib/use';

const purchaseHistoryStore = usePurchaseHistoryStore()
const { fetchPurchaseHistory } = purchaseHistoryStore
const { groupPurchaseHistoryByDate, isLoadingData } = storeToRefs(purchaseHistoryStore)

const { isLoading, runWithLoading } = useLoadingWrap()

const currentLoading = computed(() => {
  return isLoadingData.value || isLoading.value
})

onBeforeMount(() => {
  runWithLoading(fetchPurchaseHistory)
})

</script>

<template>
  <div class="purchase-history-list">
    <v-loader
      v-model="currentLoading"
      class="purchase-history-list__loading"
    />
    <template v-if="!currentLoading && groupPurchaseHistoryByDate.length !== 0">
      <div
        v-for="(data, index) in groupPurchaseHistoryByDate"
        :key="`${data.date}_${index}`"
        class="purchase-history-list__data"
      >
        <div class="purchase-history-list__info">
          <title-h3>{{ definitionsDate(data.date) }}</title-h3>
          <span class="purchase-history-list__info-total">{{ data.totalAmount }} $</span>
        </div>
        <PurchaseHistoryItem
          v-for="(history, index) in data.history"
          :key="`${history.username}_${index}`"
          :item="history"
          class="purchase-history-list__item"
        />
      </div>
    </template>

    <div
      v-if="!currentLoading && groupPurchaseHistoryByDate.length === 0"
      class="purchase-history-list__empty"
    >
      <span>Нет покупок</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>