<script setup lang="ts">
import {SearchBar} from '@/shared/ui/search';
import {useSearchBarStore} from '@/features/SearchBar';
import {storeToRefs} from 'pinia';
import {usePurchaseHistorySearchStore} from '@/entities/PurchaseHistory/model/purchase-history-search';
import {watch} from 'vue';
import {PurchaseHistoryItem} from '@/entities/PurchaseHistory/ui';

const searchBarStore = useSearchBarStore()
const { searchQuery } = storeToRefs(searchBarStore)

const purchaseHistorySearchStore = usePurchaseHistorySearchStore()
const { foundPurchaseHistories } = storeToRefs(purchaseHistorySearchStore)
const { fetchPurchaseHistorySearch } = purchaseHistorySearchStore

let searchTimeout: string | number | NodeJS.Timeout | null = null;

watch(searchQuery, (newValue) => {
  if ( newValue !== '') {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(async () => {
      await fetchPurchaseHistorySearch(newValue)
    }, 800)
  } else {
    foundPurchaseHistories.value = []
  }
})
</script>

<template>
  <div class="purchase-history-search">
    <search-bar>
      <template #results>
        <PurchaseHistoryItem
          v-for="history in foundPurchaseHistories"
          :key="history.channelId"
          :item="history"
          class="purchase-history-search__item"
        />
      </template>
    </search-bar>
  </div>
</template>

<style lang="scss" scoped>
@import "style";
</style>